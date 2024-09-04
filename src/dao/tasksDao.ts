import * as mongoose from 'mongoose';
import tasksModel from '../models/daomodels/tasks';
import { UserSchema } from '../models/daomodels/User';
import * as jwt from 'jsonwebtoken';
const signinmodel = mongoose.model('User', UserSchema);


export class tasksDao {
    private tasks = tasksModel;


 
    private userDetails: any;
 

    constructor() { }
    
    public async Delete(tasksId, callback){
     

    

    
    
    
    this.tasks.findByIdAndRemove(tasksId).then((result)	=>
     
             	{

       
        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
 
 
public async Update(tasksData, callback){
    
     
    

    
    
    
    this.tasks.findOneAndUpdate({ _id: tasksData._id }, tasksData, { new: true }).then((result)	=>
     
             	{

         
        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(tasksId, callback){
    
    
    

    
    
    
    this.tasks.findById(tasksId).then((result)	=>
     
             	{

        

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
   

    
    
    
    this.tasks.find().then((result)	=>
     
             	{

        
        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(tasksData, callback){
    
    

    let temp = new tasksModel(tasksData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        
        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
 



 
public signindao(userData, callback) {

        let payload = {
            username: userData.username,
            email: userData.email,
            id: userData._id,
        }
        let token = jwt.sign(payload, 'geppettosecret', {
            expiresIn: 86400
        });
        this.userDetails = {
            'firstname': userData.firstname,
            'lastname': userData.lastname,
            'password': userData.password,
            'email': userData.email,
            'username': userData.email,
            'Idtoken': token,
            
        };
        signinmodel.find().then(data => {
            if (data.length !== 0) { 
                let check = data.some((mail) => mail.email == userData.email);
                if (check) {
                    let mailresponse = 'Email is already exists';
                    callback(mailresponse);
                } else {
                    let logincreds = new signinmodel(this.userDetails);
                    logincreds.save().then((result) => {
                        callback(result);
                    }).catch((error) => {
                        callback(error);
                    })
                }
            } else {
                let logincreds = new signinmodel(this.userDetails);
                logincreds.save().then((result) => {
                    
                    callback(result);

                }).catch((error) => {
                    callback(error);
                })
            }
        });


}

public logindao(logindetails, callback) {
     
    signinmodel.findOneAndUpdate({ email: logindetails.email, password: logindetails.password }, { $set: { loggedinDate: new Date() } }).then((response:any) => {
        try {
            if (response === null) {
                response = 'Incorrect Username or Password';
                 
                callback(response);

            } else {
                
                callback(response);

            }
        } catch (error) {
            callback(error);
        }
    })
}


}