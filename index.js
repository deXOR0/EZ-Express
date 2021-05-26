const express = require("express");
const db = require("./database/database");
const app = express();

const PORT = 8000;

// Uncoment 3 lines below to use database connection with sequelize
// db.authenticate()
//   .then(() => console.log("Database connected!"))
//   .catch((err) => console.log(err));

// App setup
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.json()); // JSON Parser
app.use(express.urlencoded({ extended: true })); // URL Encoded Parser (Form Data)

// Routes
app.use("/example", require("./routes/example"));

// API Routes
// app.use("/api", require("./routes/api"));

app.get("/", (req, res) => {
  res.render("starter");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
