import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { join } from 'path';
import { EnderecosModule } from './enderecos/enderecos.module';
import { FotosModule } from './fotos/fotos.module';
import { EventosModule } from './eventos/eventos.module';
import { AtendimentosModule } from './atendimentos/atendimentos.module';

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
      synchronize: false,
    }),
    UsuariosModule,
    EnderecosModule,
    FotosModule,
    EventosModule,
    AtendimentosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
