import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  app.enableCors({
    origin:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : [
            'https://riquinho.vercel.app',
            'https://riquinho-rework.vercel.app/',
          ],
  });

  await app.listen(process.env.PORT || 3002);
}
bootstrap();
