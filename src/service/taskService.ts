import { Request, Response } from 'express';
import {tasksDao} from '../dao/tasksDao';
import * as jwt from 'jsonwebtoken';
let tasks = new tasksDao();

export class tasksService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    
     let  tasksId = req.params.id;
     tasks.Delete(tasksId,(response)=>{
            
         callback(response);
         });
    }
 
    
 
    
public  Update(req: Request, callback){
    
     let  tasksData = req.body;
     tasks.Update(tasksData,(response)=>{
            
         callback(response);
         });
    }
    
public  GetEntityById(req: Request, callback){
 
     let  tasksId = req.params.id;
     tasks.GetEntityById(tasksId,(response)=>{
             
         callback(response);
         });
    }
    
public  GetAllValues(req: Request, callback){
  
     
     tasks.GetAllValues((response)=>{
             
         callback(response);
         });
    }
    
public  Create(req: Request, callback){
    
     let  tasksData = req.body;
     tasks.Create(tasksData,(response)=>{
            
         callback(response);
         });
    }
    
 


    public loginservice(req: Request, callback) {
         
        const logindetails = req.body;
        tasks.logindao(logindetails, (response) => {
             
            callback(response)

        });
    }

    public signupservice(req: Request, callback) {
         
        const users = req.body;
        tasks.signindao(users, (response) => {
             
            callback(response);

        });
    }
    
    
    
    
}