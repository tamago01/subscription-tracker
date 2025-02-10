import { Router } from "express";
const authRouter = Router();

authRouter.post("/login", (req, res) => {
  res.send("Welcome to the Subscription Tracker API!");
});

export default authRouter;
