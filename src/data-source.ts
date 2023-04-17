import { join } from 'path';
import { DataSource } from 'typeorm';

const dataConfigMigrations = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'treinaweb',
  database: 'typeorm-bd',
  entities: [join(__dirname, '**/*entity.{ts,js}')],
  migrations: [join(__dirname, 'migrations/*{ts,js}')],
});

export default dataConfigMigrations;
