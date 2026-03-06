import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { HealthRoutes } from "../modules/health/health.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: HealthRoutes
  },
  {
    path: "/auth",
    route: AuthRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
