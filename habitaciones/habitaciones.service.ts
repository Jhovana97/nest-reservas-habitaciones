import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habitacion } from './entities/habitacion.entity';
import { CreateHabitacionDto } from './dto/create-habitacion.dto';

@Injectable()
export class HabitacionesService {
  constructor(
    @InjectRepository(Habitacion)
    private habitacionRepository: Repository<Habitacion>,
  ) {}

  async crear(dto: CreateHabitacionDto) {
    const nueva = this.habitacionRepository.create(dto);
    return await this.habitacionRepository.save(nueva);
  }

  async listarTodas() {
    return await this.habitacionRepository.find();
  }

  async obtenerUna(id: number) {
    const hab = await this.habitacionRepository.findOne({ where: { id } });
    if (!hab) throw new NotFoundException('Habitación no encontrada');
    return hab;
  }

  async actualizar(id: number, dto: Partial<CreateHabitacionDto>) {
    const hab = await this.obtenerUna(id);
    Object.assign(hab, dto);
    return await this.habitacionRepository.save(hab);
  }

  async eliminar(id: number) {
    const hab = await this.obtenerUna(id);
    await this.habitacionRepository.remove(hab);
    return { message: `Habitación ${id} eliminada correctamente` };
  }
}