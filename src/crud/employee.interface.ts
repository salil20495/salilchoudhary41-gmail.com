import * as mongoose from 'mongoose'
export interface employeeModel extends mongoose.Document {
    name:String,
    designation:String,
    technology:String,
    salary:number
  }