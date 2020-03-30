import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { employeeModel } from './employee.interface';

@Injectable()
export class CrudService {
  constructor(
    @InjectModel('employee') private readonly jobmodel: Model<employeeModel>,
  ) {}
  async add(a: number, b: number, c: number): Promise<number> {
    var sum = a * b * c;
    return sum;
  }
  async multiply(...mul: number[]) {
    var i;
    var data: number = 1;
    for (i = 0; i <= mul.length; i++) {
      var res = data * mul[i];
    }
    return res;
  }
  async insert(
    name: string,
    designation: string,
    technology: string,
    salary: number,
  ) {
    const add_employee = new this.jobmodel(name);
    await add_employee.save();
    return 'data added successfully';
  }
}
