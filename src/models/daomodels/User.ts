
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
   firstname: {
      type: String,
      required: true, 
      minlength: 2,  
      maxlength: 50  
  },
  lastname: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
  },
  username: {
      type: String,
      required: true,
      unique: true,  
      minlength: 3,
      maxlength: 30
  },
  email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/  
  },
  password: {
      type: String,
      required: true,
      minlength: 6 ,
      match: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/
  },
  Idtoken: String,
  loggedinDate: {
      type: Date,
      default: Date.now  
  },
  loggedoutDate: Date
   
})

const UserModel = mongoose.model('User', UserSchema, 'User');
export default UserModel;
  