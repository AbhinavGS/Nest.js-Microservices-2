import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/create-user.evet';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handlerUserCreated - COMMUNICATIONS', data);
  }
}
