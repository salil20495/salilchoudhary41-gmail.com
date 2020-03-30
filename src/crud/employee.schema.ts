import * as mongoose from 'mongoose'

export const jobschema=new mongoose.Schema({
    name:{Type:String,Required:true},
    designation:{Type:String,Required:true},
    technology:{Type:String,Required:true},
    salary:{Type:Number,Required:true}
});
