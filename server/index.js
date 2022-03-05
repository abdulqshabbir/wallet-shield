import express from 'express';

const app = express()
const PORT = process.env.PORT || 4000


// respond with hello world when GET request is made to homepage
app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

