import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export const config = {
  api: {
    bodyParser: true,
  },
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
