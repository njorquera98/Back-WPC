import { Americano } from "src/americano/entities/americano.entity";
import { Cancha } from "src/canchas/entities/cancha.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Pareja } from "src/parejas/entities/pareja.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()

export class Partido {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  resultadoPareja1: number;

  @Column()
  resultadoPareja2: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Pareja, pareja => pareja.partido1)
  @JoinColumn({ name: 'pareja1_fk' })
  pareja1: Pareja;

  @ManyToOne(() => Pareja, pareja => pareja.partido2)
  @JoinColumn({ name: 'pareja2_fk' })
  pareja2: Pareja;

  @ManyToOne(() => Grupo, grupo => grupo.partidos)
  @JoinColumn({ name: 'grupo_fk' })
  grupo: Grupo;

  @ManyToOne(() => Americano, americano => americano.partidos)
  @JoinColumn({ name: 'americano_fk' })
  americano: Americano;

  @ManyToOne(() => Cancha, cancha => cancha.partido)
  @JoinColumn({ name: 'cancha_fk' })
  cancha: Cancha;
}
