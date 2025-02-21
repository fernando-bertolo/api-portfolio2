import { Api } from "./api";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

export class ApiExpress implements Api {

    private constructor(readonly app: Express) { }

    public static build() {
        const app = express();
        app.use(cors());
        app.use(express.json());
        dotenv.config();
        return new ApiExpress(app);
    }

    public addGetRoute(path: string, handle: (req: Request, res: Response) => Promise<void>): void {
        this.app.get(path, handle);
    }

    public addPostRoute(path: string, handle: (req: Request, res: Response) => Promise<void>): void {
        this.app.post(path, handle);
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            this.printRoutes();
        });
    }

    private printRoutes() {
        const routes = this.app._router.stack.filter((route: any) => route.route).map((route: any) => {
            return {
                path: route.route.path,
                method: route.route.stack[0].method
            }
        })

        console.log(routes);
    }
}