import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cep: string;
}
