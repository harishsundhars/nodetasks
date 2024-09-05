import { Request, Response } from 'express';
import { tasksService } from '../service/taskService';

let tasks = new tasksService();

export class tasksController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    
    
    tasks.Delete(req, (response) => {
                
     res.status(200);
     res.json(response);
                 
    })}
 
 
public Update(req: Request, res: Response) {
    
    
    tasks.Update(req, (response) => {
               
     res.status(200);
     res.json(response);
                 
    })}
public GetEntityById(req: Request, res: Response) {
    
    
    tasks.GetEntityById(req, (response) => {
               
     res.status(200);
     res.json(response);
                
    })}
public GetAllValues(req: Request, res: Response) {
    
    
    tasks.GetAllValues(req, (response) => {
               
     res.status(200);
     res.json(response);
                
    })}
public Create(req: Request, res: Response) {
    
    
    tasks.Create(req, (response) => {
                 
     res.status(200);
     res.json(response);
                
    })}
 




    public login(req: Request, res: Response) {
         
        tasks.loginservice(req, (response) => {
            res.status(200);
            res.json(response);
             

        })

    }

    public signup(req: Request, res: Response) {
        
        tasks.signupservice(req, (response) => {
            res.status(201);
            res.json(response);
            
        })
    }


}