const express = require("express")
const routes = require("./routes")
const cors = require("cors")
const port = 3000
const app = express()

app.use(express.json())
app.use(cors({origin:"http://localhost:8080"}))
app.use(routes)
app.listen(port, () => {
  console.log("Listening on port: ", port)
})
