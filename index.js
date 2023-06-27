const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utls/dbConnect");
const toolsRoutes = require("./routes/v1/tools.route");
const errorHandler = require("./middleWare/errorHandler");

app.use(cors());
app.use(express.json());

// app.use(limiter)

dbConnect()

app.use('/api/v1/tools', toolsRoutes)


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all('*', (req, res) => {
  res.send("No Routes Found!")
})

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  app.close(() => {
    process.exit(1);
  });
});
