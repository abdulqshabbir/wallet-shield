// general modules
import express from 'express'
import cors from 'cors'
import db from './config/db.config.js'
import path from 'path'
import { fileURLToPath } from 'url'
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// models
import Category from './models/Category.js'
import Expense from './models/Expense.js'
import { Transaction } from "./models/Transaction.js"
import User from './models/User.js'

const app = express()
const PORT = process.env.PORT || 4000

try {
	await db.authenticate()
	console.log('Connection has been established successfully.')
} catch (error) {
	console.error('Unable to connect to the database:', error)
}

// This runs the DROP TABLE IF EXISTS query
(async () => {
	await db.sync({ force: true })
})()

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

//=============  AUTH ROUTES =============//
function authenticateToken (req, res, next) {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(" ")[1]
	if (!token) return res.status(401).json({ error: "No authorization token provided."})
	try {
		req.user = jwt.verify(token, process.env.JWT_ACCESS_TOKEN)
		next()
	} catch(e) {
		return res.status(403).send("Token is not valid.")
	}
}

let refreshTokens = []

app.post("/api/token", (req, res) => {
	/*
		user sends refreshToken in request body
		server sends back new access token if refreshToken is valid
		server sends back 403 if invalid
	 */
	const refreshToken= req.body.token
	if (!refreshToken) return res.status(401).json({ error: "No refresh token provided." })
	if(!refreshTokens.includes(refreshToken)) return res.status(403).json({ error: "Invalid refresh token."})
	try {
		const user = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN)
		const accessToken = jwt.sign({ email: user.email }, process.env.JWT_ACCESS_TOKEN, { expiresIn: "15s" })
		return res.status(200).json({ accessToken })
	} catch(e) {
		return res.status(403).json({ error: "Unauthorized."})
	}
})

app.post("/api/signup", async(req, res) => {
	let { email, password, confirmPassword } = req.body
	
	if (!email || !password || !confirmPassword) {
		return res.status(400).json({ error: "Please fill all required fields."})
	}

	if (password !== confirmPassword) {
		return res.status(400).json({ error: "Passwords must match." })
	}

	if (password.length < 8) {
		return res.status(400).json({ error: "Password must be at least 8 characters."})
	}

	try {
		let user = await User.findOne({ where: { email: email} })
		if (user) {
			return res.status(400).json({ error: "User with email already exists."})
		}

		let hashedPassword = await bcrypt.hash(password, 10)
		user = await User.create({
			email,
			hashedPassword
		})
		return res.status(200).json({ message: "User successfully created. Try logging in!"})
	} catch(e) {
		return res.status(500).json({ error: "Internal server error."})
	}
})

app.post("/api/login", async (req, res) => {
	const { email, password } = req.body

	if (!email || !password) {
		return res.status(400).json({ error: "Please fill all required fields."})
	}
	try {
		let user = await User.findOne({ where: { email: email }})
		if (!user) {
			return res.status(400).json({ error: "User with this email does not exist."})
		}

		let isPasswordMatch = await bcrypt.compare(password, user.hashedPassword)
		if (!isPasswordMatch) {
			return res.status(400).json({ error: "Incorrect password for this email."})
		} else {
			// send jwt token to authorize user
			const accessToken = jwt.sign({ email }, process.env.JWT_ACCESS_TOKEN, { expiresIn: "15s"})
			const refreshToken = jwt.sign({ email }, process.env.JWT_REFRESH_TOKEN)
			// TODO remove line and add refresh tokens to database
			refreshTokens.push(refreshToken)
			return res.status(200).json({ accessToken, refreshToken })
		}
	} catch(e) {
		return res.status(500).json({ error: "Internal server error."})
	}
})

app.delete("/api/logout", (req, res) => {
	refreshTokens = refreshTokens.filter(t => t !== req.body.token)
	return res.sendStatus(204)
})

app.get("/api/expenses", authenticateToken, (req, res) => {
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
