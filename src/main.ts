import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  // versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix:'api/v',
  })

  await app.listen(3001);
}
bootstrap();
