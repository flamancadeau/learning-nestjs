import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';
import { ErrorInterceptor } from './common/interceptor/error.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  app.useGlobalInterceptors(new ResponseInterceptor(), new ErrorInterceptor());

  setupSwagger(app);
  await app.listen(port);

  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📄 Swagger docs at http://localhost:${port}/api`);
}
void bootstrap();
