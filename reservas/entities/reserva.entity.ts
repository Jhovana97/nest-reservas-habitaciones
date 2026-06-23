import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Habitacion } from './../../habitaciones/entities/habitacion.entity';

@Entity('reservas')
export class Reserva {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombreCliente!: string;

    @Column({ type: 'date' })
    fechaInicio!: Date;

    @Column({ type: 'date' })
    fechaFin!: Date;

    @Column()
    habitacionId!: number;

    // Una habitación tiene muchas reservas, pero cada reserva pertenece a una habitación
    @ManyToOne(() => Habitacion, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'habitacionId' })
    habitacion!: Habitacion;

    @Column({ type: 'varchar', default: 'pendiente' }) // pendiente, confirmada, cancelada
    estado!: string;
}