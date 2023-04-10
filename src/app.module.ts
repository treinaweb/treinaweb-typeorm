import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { join } from 'path';
import { EnderecosModule } from './enderecos/enderecos.module';
import { FotosModule } from './fotos/fotos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'treinaweb',
      database: 'typeorm-bd',
      entities: [join(__dirname, '**/*entity.{ts,js}')],
      synchronize: true,
    }),
    UsuariosModule,
    EnderecosModule,
    FotosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
