import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Evento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  descricao: string;

  @Column({ nullable: false })
  data: Date;

  @ManyToMany(() => Usuario, (usuario) => usuario.eventos)
  @JoinTable({
    name: 'evento_usuario',
    joinColumn: {
      name: 'evento_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'usuario_id',
      referencedColumnName: 'id',
    },
  })
  usuarios: Usuario[];
}
