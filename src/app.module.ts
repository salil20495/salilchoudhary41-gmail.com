import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { loggermiddleware } from './logger.middleware';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    AppModule,
    CrudModule,
    MongooseModule.forRoot('mongodb://localhost:27017/mydb'),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loggermiddleware).forRoutes('add');
  }
}
