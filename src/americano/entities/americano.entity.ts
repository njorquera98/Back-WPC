import { Grupo } from "src/grupo/entities/grupo.entity";
import { Pareja } from "src/parejas/entities/pareja.entity";
import { Partido } from "src/partidos/entities/partido.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()

export class Americano {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  nombre: string;

  @Column()
  fechaInicio: Date;

  @Column()
  cantidadGrupos: number;

  @OneToMany(() => Pareja, pareja => pareja.americano)
  parejas: Pareja[];

  @OneToMany(() => Grupo, grupo => grupo.americano)
  grupos: Grupo[];

  @OneToMany(() => Partido, partido => partido.americano)
  partidos: Partido[];
}
