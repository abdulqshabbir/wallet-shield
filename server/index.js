import express from 'express';
import cors from 'cors';
import db from './config/db.config.js'
import Expense from './models/Expense.js';

const app = express();
const PORT = process.env.PORT || 4000;

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


// This runs the DROP TABLE IF EXISTS query
(async () => {
    await db.sync({ force: true });
})();

var corsOptions = {
    origin: "http://localhost:3000"
};

// allow cross origin requests from our client
app.use(cors(corsOptions));

// parse incoming requests of content-type - application/json
app.use(express.json());

// parse incoming requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// this is a test route that works
app.get("/expenses", (req, res) => {
    const expense = {
        expenseName: "Dominoes pizza"
    }

    Expense.create({
        expenseName: expense.expenseName
    })
    .then(expense => {
        res.status(200).send(expense)
    })
    .catch(e => {
        console.log(e)
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
