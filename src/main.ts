import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Validaciones globales para los DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // 2. Configuración de OpenAPI (Swagger)
  const config = new DocumentBuilder()
    .setTitle('Sistema de Reservas - Hotel')
    .setDescription('API para la gestión de habitaciones y reservas')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);

  // 3. Montar la interfaz de Scalar en /docs
  app.use(
    '/docs',
    apiReference({
      spec: { content: document },
    }),
  );

  await app.listen(3000);
  console.log('🚀 Servidor corriendo en: http://localhost:3000');
  console.log('📄 Documentación en: http://localhost:3000/docs');
}
bootstrap();