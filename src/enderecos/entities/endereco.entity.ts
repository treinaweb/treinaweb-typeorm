import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ nullable: false })
  cidade: string;

  @Column({ nullable: false })
  estado: string;

  @Column({ nullable: false })
  bairro: string;

  @Column({ nullable: false })
  numero: string;

  @Column({ nullable: true })
  complemento: string;

  @Column({ nullable: false })
  endereco: string;

  @OneToOne(() => Usuario, (usuario) => usuario.endereco)
  usuario: Usuario;
}
