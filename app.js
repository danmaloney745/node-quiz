const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const showRoutes = require("./routes/show");
const app = express();


/*=============MIDDLEWARE=============*/
app.set('view engine', 'ejs');

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(routes);
app.use(showRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});