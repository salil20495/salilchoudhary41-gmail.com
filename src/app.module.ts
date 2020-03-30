import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudController } from './crud/crud.controller';
import { CrudService } from './crud/crud.service';
import { CrudModule} from './crud/crud.module';
import { loggermiddleware } from './logger.middleware';
import {employeeModel} from './crud/employee.interface'
import {jobschema} from './crud/employee.schema'
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';

@Module({
  imports: [AppModule,CrudModule,MongooseModule.forRoot("mongodb://localhost:27017/mydb"), StudentModule],
  controllers: [AppController, CrudController, StudentController],
  providers: [AppService, CrudService],
})
export class AppModule implements NestModule {
  configure(consumer:MiddlewareConsumer){
      consumer
      .apply(loggermiddleware)
      .forRoutes('add')
  }
}
