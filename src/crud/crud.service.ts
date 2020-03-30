import { Injectable, Post } from '@nestjs/common';
import {jobschema} from './employee.schema'
import {employeeModel} from './employee.interface'
import {model, Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
@Injectable()
export class CrudService {
    //constructor(@InjectModel('employee') private readonly jobmodel:Model<employeeModel>){}
    constructor(@InjectModel('employee') private readonly Model<employeeModel>){}
 async add(a:number,b:number,c:number):Promise<number>{
        var sum=a*b*c;
        return sum
    }
    async multiply(...mul:number[]){
        var i;
        var data:number=1;
        for(i=0;i<=mul.length;i++){
            var res=data*mul[i];
        }
        return res;
    }
    async insert(name:string,designation:string,technology:string,salary:number){
        const add_employee=new this.jobmodel(name)
        await add_employee.save();
        return "data added successfully"
    }
}
