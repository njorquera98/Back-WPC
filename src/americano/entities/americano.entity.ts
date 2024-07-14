import { Pareja } from "src/parejas/entities/pareja.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()

export class Americano {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  nombre: string;

  @Column()
  fecha: Date;

  @OneToMany(() => Pareja, pareja => pareja.americano)
  parejas: Pareja[];
}
