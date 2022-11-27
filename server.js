const express = require("express")
const app = express()
const cors = require("cors")
app.use(
  cors({
    origin: "https://leira123.github.io",
  })
)  

app.get("/_/GoogleFinanceUi/data/batchexecute?rpcids=Ba1tad&source-path=%2Fleira123.github.io-ibo1%2F&f.sid=3848989295377688160&bl=boq_finance-ui_20221004.02_p0&hl=pt-BR&soc-app=162&soc-platform=1&soc-device=1&_reqid=1611076&rt=c", (req, res) => {
  res.json({ })
})

app.listen(3000)
