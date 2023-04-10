import { Endereco } from 'src/enderecos/entities/endereco.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @OneToOne(() => Endereco, (endereco) => endereco.usuario, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'endereco_id' })
  endereco: Endereco;
}
