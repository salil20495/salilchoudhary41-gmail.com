import { Module } from '@nestjs/common';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';
import { employeeModel } from './employee.interface';
import { JobSchema } from './employee.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CrudModule,
    MongooseModule.forFeature([
      { name: 'employee', schema: JobSchema, collection: 'employee' },
    ]),
  ],
  controllers: [CrudController],
  providers: [CrudService],
})
export class CrudModule {}
