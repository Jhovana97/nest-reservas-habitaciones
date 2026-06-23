import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitacionesModule } from './modules/habitaciones/habitaciones.module';
import { ReservasModule } from './modules/reservas/reservas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Cambia a 'mysql' si es tu caso
      host: 'localhost',
      port: 5432,       // Cambia a 3306 si usas MySQL
      username: 'postgres',
      password: '123456',
      database: 'examen-reservas-habitciones',
      autoLoadEntities: true, // Carga automáticamente las entidades que creemos
      synchronize: true,      // Crea las tablas en la BD automáticamente (ideal para exámenes)
    }),
    HabitacionesModule,
    ReservasModule,
  ],
})
export class AppModule {}