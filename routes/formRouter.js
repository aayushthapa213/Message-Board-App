import { Router } from "express";
const formRouter = Router();

formRouter.get('/',(req,res)=>{
  res.render('form');
})

formRouter.post('/',(req,res)=>{
  const messages = req.app.locals.messages;
  messages.push({ text: req.body.message, user: req.body.name, added: new Date() });
  res.redirect("/")
})
export default formRouter;