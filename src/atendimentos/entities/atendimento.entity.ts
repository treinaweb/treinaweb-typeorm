import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Atendimento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  descricao: string;

  @Column({ name: 'data_inicio' })
  dataInicio: Date;

  @Column({ name: 'data_encerramento' })
  dataEncerramento: Date;
}
