import express from 'express'
import cors from 'cors'
import db from './config/db.config.js'
import path from 'path'
import { fileURLToPath } from 'url'
import Category from './models/Category.js'
import Expense from './models/Expense.js'
import { Transaction } from "./models/Transaction.js"

const app = express()
const PORT = process.env.PORT || 4000

try {
	await db.authenticate()
	console.log('Connection has been established successfully.')
} catch (error) {
	console.error('Unable to connect to the database:', error)
}

// This runs the DROP TABLE IF EXISTS query
// (async () => {
// 	await db.sync({ force: true })
// })()

// allow all cross origin requests
app.use(cors())

// parse incoming requests of content-type - application/json
app.use(express.json())

// parse incoming requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")))

}
app.get("/api/expenses", (req, res) => {
	Expense.findAll()
		.then(expenses => {
			res.status(200).json(expenses)
		})
		.catch(e => {
			console.log(e)
			res.status(500).send({error: "Internal server error"})
		})
})

app.get("/api/categories", (req, res) => {
	Category.findAll()
		.then(categories => {
			res.status(200).send(categories)
		})
		.catch(e => {
			console.log(e)
			res.status(500).send({error: "Internal server error"})
		})
})

app.post("/api/categories", (req, res) => {
	const name = req.body.name
	Category.create({
		name
	}).then (category => {
		res.status(200).send(category)
	}).catch(e => {
		res.status(500).send({error: "Internal server error"})
		console.log(e)
	})
})

app.delete("/api/categories/:id", async (req, res) => {
	const id = req.params.id

	try {
		let category = await Category.findByPk(id)
		if (!category) {
			return res.status(400).send({error: "Cannot delete a category that is not in the DB."})	
		} else {
			await category.destroy()
			return res.status(200).send("Category successfully deleted.")
		}
	} catch(e) {
		return res.status(500).send({error: "Internal server error."})
	}
})

app.post("/api/expenses", (req, res) => {
	const name = req.body.name
	const remaining = parseFloat(req.body.remaining)
	const max = parseFloat(req.body.max)
	const categoryId = req.body.categoryId

	if ( isNaN(remaining) || isNaN(max) || max <= 0 || remaining <= 0) {
		res.status(400).send({ error: 'Invalid data sent' })
	} else {
		Expense.create({
			name,
			remaining,
			max,
			categoryId
		})
		.then(expense => {
			res.status(200).send(expense)
		})
		.catch(e => {
			console.log(e)
			res.status(400).send({error: "Internal server error"})
		})
	}

})

app.get("/api/transactions", (req, res) => {
	Transaction.findAll()
		.then(expenses => {
			res.status(200).send(expenses)
		})
		.catch(e => {
			res.status(400).send({error: "Internal server error", message: e.message})
		})
})

app.post("/api/transactions", async(req, res) => {
	let { amount, isOutflow, expenseId, repeat, memo, date } = req.body
	amount = parseFloat(amount)
	expenseId = parseFloat(expenseId)

	if (isNaN(amount)) {
		res.status(400).send({ error: "Invalid data sent" })
	} else {
		try {
			const newTransaction = await Transaction.create({
				amount,
				isOutflow,
				expenseId,
				repeat,
				memo: memo ? memo : null,
				date
			})

			const expense = await Expense.findByPk(expenseId)
			expense.remaining = 
				isOutflow
				? expense.remaining - amount
				: expense.remaining + amount
			await expense.save()
			res.status(201).send(newTransaction)
		} catch(e) {
			res.status(400).send({ error: "Internal server error", message: e.message })
		}
	}
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
