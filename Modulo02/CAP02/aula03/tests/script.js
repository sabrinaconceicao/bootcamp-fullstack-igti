import express from "express";
import winston from "winston";

const app = express();

app.use(express.json());

app.use(express.static("public"));
app.use("/imagens", express.static("public"));

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "tests" }),
  ],
  format: combine(label({ label: "tests" }), timestamp(), myFormat),
});

logger.error("Error log");
logger.warn("Warn log");
logger.info("Info lIg");
logger.verbose("Verbose log");
logger.debug("Debug log");
logger.silly("Silly log");
logger.log("info", " Hello with parameter!");

app.listen(3000, async () => {
  console.log("API started!");
});

// //Seção Rotas

// app.all("/testAll", (req,res) =>{
//   res.send(req.method);
// });

// app.get("/teste?", (_, res)=>{
//   res.send("/teste?");
// });

// app.get("/buzz+", (_,res)=>{
//   res.senf("/buzz+");
// });

// app.get("/one*Blue", (_,res) => {
//   res.send("/one*Blue");
// });

// app.post("/test(ing)?", (_,res) =>{
//   res.send("/test(ing)?");
// });

// app.get(/.*Red$/, (_,res) =>{
//   res.send("/.*Red$/")
// })
