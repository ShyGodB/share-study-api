import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  await app.listen(PORT, () => {
    console.log(`server is running at http://127.0.0.1:${PORT}`)
  });
}
bootstrap();
