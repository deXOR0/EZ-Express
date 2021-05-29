const express = require("express");
const db = require("./database/database");
const dotenv = require("dotenv");
const app = express();

// Uncoment 3 lines below to use database connection with sequelize
// db.authenticate()
//   .then(() => console.log("Database connected!"))
//   .catch((err) => console.log(err));

// App setup
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/public/views");
app.use(express.json()); // JSON Parser
app.use(express.urlencoded({ extended: true })); // URL Encoded Parser (Form Data)
dotenv.config();

// Routes
app.use("/api", require("./src/routes/api"));

app.get("/", (req, res) => {
  res.render("starter");
});

// Error handler
app.use((error, req, res, next) => {
  error.code ? res.status(error.code) : res.status(400);
  res.json({
    error: error.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
