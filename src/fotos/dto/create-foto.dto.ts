import { Usuario } from 'src/usuarios/entities/usuario.entity';

export class CreateFotoDto {
  nome: string;
  url: string;
  usuario: Usuario;
}
