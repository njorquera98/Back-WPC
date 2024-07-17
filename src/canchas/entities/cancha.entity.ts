import { Partido } from "src/partidos/entities/partido.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()

export class Cancha {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  numeroCancha: string;

  @OneToMany(() => Partido, partido => partido.cancha)
  partido: Partido[];
} 
