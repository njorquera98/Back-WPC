import { Americano } from "src/americano/entities/americano.entity";
import { Cancha } from "src/canchas/entities/cancha.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class CanchaDisponible {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Americano, americano => americano.canchaDisponible)
  @JoinColumn({ name: 'americano_fk' })
  americano: Americano;

  @ManyToOne(() => Cancha, cancha => cancha.canchaDisponible)
  @JoinColumn({ name: 'cancha_fk' })
  cancha: Cancha;

}
