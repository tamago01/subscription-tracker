import arcjet, { shield, tokenBucket, detectBot } from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";

const aj = arcjet({
  key: ARCJET_KEY,
  characteristics: ["ip.src"], // Track requests by IP
  rules: [
    shield({ mode: "LIVE" }),

    detectBot({
      mode: "LIVE",

      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),

    tokenBucket({
      mode: "LIVE",
      refillRate: 1, // Refill 5 tokens per interval
      interval: 1, // Refill every 10 seconds
      capacity: 1, // Bucket capacity of 10 tokens
    }),
  ],
});

export default aj;
