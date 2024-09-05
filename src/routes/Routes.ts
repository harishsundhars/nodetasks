import { Request, Response, NextFunction } from "express";
import { tasksController } from '../controller/tasksController';
import { Config } from "../config/auth";

export class Routes {
    private tasks: tasksController = new tasksController();
    private config = new Config();
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/tasks/:id').delete(this.config.authenticateToken, this.tasks.Delete);
        app.route('/tasks').put(this.config.authenticateToken, this.tasks.Update);
        app.route('/tasks/:id').get(this.config.authenticateToken, this.tasks.GetEntityById);
        app.route('/tasks').get(this.config.authenticateToken, this.tasks.GetAllValues);
        app.route('/tasks').post(this.config.authenticateToken, this.tasks.Create);
        app.route('/login').post(this.tasks.login);
        app.route('/signup').post(this.tasks.signup);
     }

}