import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Foto {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  url: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.foto, { cascade: true })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;
}
