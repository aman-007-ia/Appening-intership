const connnectToMongo = require("./db");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
connnectToMongo();

app.use(express.json());
app.use("/", require("./routes/auth"));

app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`);
});