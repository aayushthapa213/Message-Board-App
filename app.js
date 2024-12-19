import express from "express";
import indexRouter from "./routes/indexRouter.js";
import formRouter from "./routes/formRouter.js";
import messageRouter from "./routes/messageRouter.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))

const port = 8080;

app.locals.messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];


app.use("/", indexRouter);
app.use("/new",formRouter);
app.use('/message',messageRouter);

app.listen(port || 8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server listening to the port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});


