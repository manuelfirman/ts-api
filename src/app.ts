import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./routes";

const app = express();

app.use("/api", router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))