import { Request, Response, NextFunction } from "express";
import { tasksController } from '../controller/tasksController';


export class Routes {
    private tasks: tasksController = new tasksController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/tasks/:id').delete(this.tasks.Delete);
        app.route('/tasks').put(this.tasks.Update);
        app.route('/tasks/:id').get(this.tasks.GetEntityById);
        app.route('/tasks').get(this.tasks.GetAllValues);
        app.route('/tasks').post(this.tasks.Create);
        app.route('/login').post(this.tasks.login);
        app.route('/signup').post(this.tasks.signup);
     }

}