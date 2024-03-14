require("dotenv").config();
require("express-async-errors");
// express
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
var cors = require("cors");

// MongoDB Connection
const connectDB = require("./db/connect");

// Routers
const feedbackRouter = require("./routes/FeedbackRouter");
const authRouter = require("./routes/AuthRouter");
const userRouter = require("./routes/UserRouter");
const eventRouter = require("./routes/EventRouter");

// middlewares
const notFoundMiddleWare = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser(process.env.JWT_SECRET));

app.use("/api/v1/feedback", feedbackRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/events", eventRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = 8000 || process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
