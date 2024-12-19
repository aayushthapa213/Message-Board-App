import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  const messages = req.app.locals.messages; 
  res.render("index", {  messages });
});

export default indexRouter;
