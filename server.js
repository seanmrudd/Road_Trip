const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Road_Trip", { useNewUrlParser: true });

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use("/", indexRouter);
app.use("/authentication", userRouter);
app.use(passport.initialize());


app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});

module.exports = app;