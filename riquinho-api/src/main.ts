import { NestFactory } from '@nestjs/core';
import { AppConfigService } from './app-config/app-config.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(AppConfigService);

  app.enableCors({ origin: configService.getCORSOrigin() });

  await app.listen(+process.env.API_PORT || 3002);
}
bootstrap();
