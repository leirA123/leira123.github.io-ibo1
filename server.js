const express = require("express")
const app = express()
const cors = require("cors")
app.use(
  cors({
    origin: "https://leira123.github.io",
  })
)  

app.get("/log?format=json&hasfast=true&authuser=0", (req, res) => {
  res.json({ })
})

app.listen(3000)
