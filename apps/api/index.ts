import express from "express";
import jwt from "jsonwebtoken"
import cors from "cors"
import adminRouter from "./routes/admin"
import userRouter from "./routes/user";


const app = express();
app.use(express.json());
app.use(cors());

app.use("/admin" ,adminRouter);


