import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reserva } from './reservas/reserva.entity'; // fixed import path

@Entity('habitaciones')
export class Habitacion {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    numero!: string;

    @Column()
    tipo!: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precioPorNoche!: number;

    // Relación inversa: Una habitación tiene muchas reservas
    @OneToMany(() => Reserva, (reserva) => reserva.habitacion)
    reservas!: Reserva[];
}