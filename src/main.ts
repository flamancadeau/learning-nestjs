import { NestFactory, Reflector } from '@nestjs/core'; // Added Reflector
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common'; // Added Imports
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';
import { ErrorInterceptor } from './common/interceptor/error.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector)),
    new ResponseInterceptor(),
    new ErrorInterceptor(),
  );

  setupSwagger(app);
  await app.listen(port,'0.0.0.0');

  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📄 Swagger docs at http://localhost:${port}/api`);
}
void bootstrap();
