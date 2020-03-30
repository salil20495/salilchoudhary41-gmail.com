import { Controller,Get,Post,Body, Param, Req } from '@nestjs/common';
import { CrudService } from './crud.service';

@Controller('crud')
export class CrudController {
    constructor(private readonly crudservice:CrudService){}
    @Post('multiply')
      async mul(@Body('a')a:number,@Body('b')b:number,@Body('c')c:number){
            return this.crudservice.add(a,b,c)
        }
        @Post('add')
        add(@Body('name')name:string,@Body('designation')designation:string,@Body('technology')technology:string,@Body('salary')salary:number){
            return this.crudservice.insert(name,designation,technology,salary)
        }
}