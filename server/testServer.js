const express = require("express");
const cors = require ('cors')
const routesHandler = require('./routes/handler')


const app = express(),
      bodyParser = require("body-parser");
      port = 8080;

const cookieParser = require("cookie-parser");
const controller = require("./scrapper");

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', routesHandler)
// app.get('/',controller.travelDestinations)


// app.use("/", Router);


app.listen(port, "0.0.0.0", (err) => {
  if (err) {
    console.log('error: ' + err);
  }
  console.info(">>> 🌎 Open http://0.0.0.0:%s/ in your browser.", port);
});

module.exports = app;
