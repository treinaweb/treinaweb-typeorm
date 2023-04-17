import { MigrationInterface, QueryRunner } from 'typeorm';

export class Atendimentos1681746067829 implements MigrationInterface {
  name = 'Atendimentos1681746067829';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`atendimento\` (\`id\` int NOT NULL AUTO_INCREMENT, \`descricao\` varchar(255) NOT NULL, \`data_inicio\` datetime NOT NULL, \`data_encerramento\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`atendimento\``);
  }
}
