
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

// enum Status {
//    Open = "open",
//    Close = "close",
//    InProgress = "inprogress",
//    Backlog = "backlog"
// }


export const tasksSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   title: { type: String },
   description: { type: String },
   comments: { type: String },
   status:  { type: String }
})

const tasksModel = mongoose.model('tasks', tasksSchema, 'tasks');
export default tasksModel;
