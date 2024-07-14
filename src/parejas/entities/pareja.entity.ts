import { Americano } from "src/americano/entities/americano.entity";
import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";

@Entity()

export class Pareja {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  nombre_pareja: string;

  @ManyToOne(() => Americano, americano => americano.parejas)
  @JoinColumn({ name: 'americano_fk' })
  americano: Americano
}
