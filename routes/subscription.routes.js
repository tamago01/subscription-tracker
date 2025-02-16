import { Router } from "express";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";
import authorize from "../middleware/auth.middleware.js";
const subsRouter = Router();

subsRouter.get("/", (req, res) => res.send({ title: "GET all subscriptions" }));

subsRouter.get("/:id", (req, res) =>
  res.send({ title: "GET subscription details" })
);

subsRouter.post("/", authorize, createSubscription);

subsRouter.get("/user/:id", authorize, getUserSubscriptions);

subsRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscription" })
);

subsRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);

export default subsRouter;
