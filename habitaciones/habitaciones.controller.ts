import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { HabitacionesService } from './habitaciones.service';
import { CreateHabitacionDto } from './dto/create-habitacion.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Habitaciones')
@Controller('habitaciones')
export class HabitacionesController {
    constructor(private readonly habitacionesService: HabitacionesService) { }

    @Post()
    crear(@Body() dto: CreateHabitacionDto) {
        return this.habitacionesService.crear(dto);
    }

    @Get()
    listar() {
        return this.habitacionesService.listarTodas();
    }

    @Get(':id')
    obtenerUna(@Param('id', ParseIntPipe) id: number) {
        return this.habitacionesService.obtenerUna(id);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: Partial<CreateHabitacionDto>) {
        return this.habitacionesService.actualizar(id, dto);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.habitacionesService.eliminar(id);
    }
}