const express = require("express");
const mongoose = require("mongoose");
const cors = require ('cors')



const app = express()
// app.use(
//     cors({
//       origin: function (origin, callback) {
//         return callback(null, true);
//       },
//       optionsSuccessStatus: 200,
//       credentials: true,
//     })
//   );

const port = 8080;
const controller = require("./scrapper");
const cookieParser = require("cookie-parser");

// const mongoUrl = 'mongodb+srv://bata_shane:Dell@Morimai1@clustershaneswitchmaven.hr9jm.gcp.mongodb.net/bata_shanedb?retryWrites=true&w=majority'

// mongoose.connect(mongoUrl, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// });

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get('/', controller.scrapeCovidLive )
// app.get('/',controller.travelDestinations)


// app.use("/", Router);


app.listen(port, "0.0.0.0", (err) => {
  if (err) {
    console.log('error: ' + err);
  }
  console.info(">>> 🌎 Open http://0.0.0.0:%s/ in your browser.", port);
});

module.exports = app;
