import { Column, Entity } from "typeorm";

@Entity()
export class Fase {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  nombre: string;
}
