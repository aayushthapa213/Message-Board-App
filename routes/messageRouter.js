import { Router } from "express";
const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  let messages = req.app.locals.messages;
  res.render("message", {
    message: messages[req.query.position].text,
    author: messages[req.query.position].user,
    added: messages[req.query.position].added,
  });
});
export default messageRouter;
