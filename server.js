const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use( express.static( "views" ) );
app.use("/", require("./public/routes/root"));
app.use("/home", require("./public/routes/home"));
app.use("/catalog", require("./public/routes/catalog"));
app.use("/authorization", require("./public/routes/authorization"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);