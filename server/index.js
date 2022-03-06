import express from 'express';
import cors from 'cors';
import db from './models/index.js'

db.sequelize.sync();

/*
    Use this to drop tables and re-sync

    db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    });
*/

const app = express();
const PORT = process.env.PORT || 4000;

var corsOptions = {
    origin: "http://localhost:3000"
};

// allow cross origin requests from our client
app.use(cors(corsOptions));

// parse incoming requests of content-type - application/json
app.use(express.json());

// parse incoming requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// respond with hello world when GET request is made to homepage
app.get("/", (req, res) => {
    res.json({ message: "Welcome to expresss" })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
