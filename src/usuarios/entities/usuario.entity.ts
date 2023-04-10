import { Endereco } from 'src/enderecos/entities/endereco.entity';
import { Foto } from 'src/fotos/entities/foto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
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

  @OneToMany(() => Foto, (foto) => foto.usuario)
  foto: Foto;
}
