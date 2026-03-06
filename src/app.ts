import cors from "cors";
import express from "express";
import { API_PREFIX } from "./app/constants";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(API_PREFIX, router);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
