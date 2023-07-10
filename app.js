const express = require("express");
const morgan = require("morgan");
const expressLayout = require("express-ejs-layouts");

const app = express();

// Routers
const userRouter = require("./server/routes/userRoutes");

// Middlewares
if (process.env.NODE_ENV === "development") app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/public`));

// Custom Middlewares
app.use((req, res, next) => {
  req.time = new Date().toISOString();
  next();
});

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Routes
app.use("/", userRouter);

module.exports = app;
