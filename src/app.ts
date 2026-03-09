import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { API_PREFIX } from "./app/constants";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";

const app = express();

app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 200
  })
);
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(API_PREFIX, router);

app.use(notFound);
app.use(globalErrorHandler);

export default app;
