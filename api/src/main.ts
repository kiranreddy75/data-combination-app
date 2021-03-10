import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PlatformSummary } from './platforms/entities/platform.entity';
import { User } from './users/entities/user.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.API_PORT || 3333;

  const config = new DocumentBuilder()
    .setTitle('Data Combination API')
    .setDescription('API for Data Combination Homework Assignment. Create verb purposefully omitted from User and Platform endpoints.')
    .setVersion('1.0')
    .addTag('Users', '_RUD Operations for User Entities.')
    .addTag('Platforms', '_RUD Operations for User Entities.')
    .addTag('Hello World', 'A Pseudo health-check-y kind of do-majiggy')
    .build();
  const document = SwaggerModule.createDocument(app, config, { deepScanRoutes: true, extraModels: [User, PlatformSummary] });
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();