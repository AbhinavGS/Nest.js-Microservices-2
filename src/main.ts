import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>( //setting as microservice
    AppModule,
    {
      transport: Transport.TCP, //setting TCP as transport, also can use kafka
    },
  );
  await app.listen();
}
bootstrap();
