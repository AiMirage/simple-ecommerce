/**
 * Routes
 */
import authRoutes from "./auth";

/**
 * Router Register
 */
import { Express } from "express";

const routes = (app: Express) => {

    const apiPerifx = '/api/v1';

    app.use(authRoutes);

    return app;
};

export default routes;