var express = require("express");
const cors = require("cors");
const session = require("express-session");


var app = express();
var PORT = process.env.PORT || 8080;


const url = "http://localhost:3000";


app.use(cors({
    origin: [url],
    credentials: true
  }));
  app.use(session({ secret: "something secret here", resave: true, saveUninitialized: true,cookie:{maxAge: //7200000 
    360000000
} }));


 
var db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const allRoutes = require('./controllers/routes');

app.use('/', allRoutes);



db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});