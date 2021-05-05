// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

var cors = require('cors')

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
const MONGO_URI = process.env.MONGODB_URI;
const MONGO_DB_USER = process.env.MONGO_DB_USER;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
mongoose.connect(MONGO_URI, {
    auth: {
      user: MONGO_DB_USER,
      password: MONGO_DB_PASSWORD
    }
  })
var db = mongoose.connection;


// Added check for DB connection
if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});
