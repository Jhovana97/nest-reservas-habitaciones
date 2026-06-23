import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHabitacionDto {
    @ApiProperty({ example: '101' })
    @IsString()
    @IsNotEmpty()
    numero!: string;

    @ApiProperty({ example: 'suite' })
    @IsString()
    @IsNotEmpty()
    tipo!: string; // individual, doble, suite

    @ApiProperty({ example: 120.50 })
    @IsNumber()
    precioPorNoche!: number;
}