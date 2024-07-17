import { Americano } from "src/americano/entities/americano.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Partido } from "src/partidos/entities/partido.entity";
import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity()

export class Pareja {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  nombre_pareja: string;

  @ManyToOne(() => Americano, americano => americano.parejas)
  @JoinColumn({ name: 'americano_fk' })
  americano: Americano;

  @ManyToOne(() => Grupo, grupo => grupo.parejas)
  @JoinColumn({ name: 'grupo_fk' })
  grupo: Grupo;

  @OneToMany(() => Partido, partido => partido.pareja1)
  partido1: Partido[];

  @OneToMany(() => Partido, partido => partido.pareja2)
  partido2: Partido[];
}
