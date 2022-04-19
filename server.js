const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use("/", require("./routes/root"));
app.use("/home", require("./routes/home"));
app.use("/catalog", require("./routes/catalog"));
app.use("/authorization", require("./routes/authorization"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);