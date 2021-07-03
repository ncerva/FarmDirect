const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 80;
const app = express();
const mongoose = require("mongoose");

// imports models to use with queries
const db = require('./models/index');
const routes = require('./routes');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here


// Send every other request to the React app
// Define any API routes before this runs

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> CORS enabled API server now on port ${PORT}!`);
});
