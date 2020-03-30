import { NestMiddleware, Injectable } from '@nestjs/common';

@Injectable()
export class loggermiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => any) {
    console.log('you hit the api of CrudController of add route' + req.url);
    next();
  }
}
