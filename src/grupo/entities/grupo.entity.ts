import { Americano } from "src/americano/entities/americano.entity";
import { Pareja } from "src/parejas/entities/pareja.entity";
import { Partido } from "src/partidos/entities/partido.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
@Entity()

export class Grupo {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  nombreGrupo: string;

  @OneToMany(() => Pareja, pareja => pareja.grupo)
  parejas: Pareja[];

  @OneToMany(() => Partido, partido => partido.grupo)
  partidos: Partido[];

  @ManyToOne(() => Americano, americano => americano.parejas)
  @JoinColumn({ name: 'americano_fk' })
  americano: Americano;
}
