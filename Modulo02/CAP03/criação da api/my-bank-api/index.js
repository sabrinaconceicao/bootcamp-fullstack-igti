import express from "express";
import { promises } from "fs";
import winston from "winston";
import accountsRouter from "./routes/accounts.js";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./doc.js";
import cors from "cors";

const app = express();
const readFile = promises.readFile;
const writeFile = promises.writeFile;

global.fileName = "accounts.json";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "my-bank-api.log" }),
  ],
  format: combine(label({ label: "my-bank-api" }), timestamp(), myFormat),
});

app.use(express.json());
app.use(cors());
app.use("/account", accountsRouter);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, async () => {
  try {
    await readFile(global.fileName, "utf8");
    logger.info("API started!");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    writeFile(global.fileName, JSON.stringify(initialJson)).catch((err) => {
      logger.error(err);
    });
  }
});
