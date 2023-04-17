import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private repository: Repository<Usuario>,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    return await this.repository
      .createQueryBuilder()
      .insert()
      .into(Usuario)
      .values([
        {
          nome: createUsuarioDto.nome,
          email: createUsuarioDto.email,
          password: createUsuarioDto.password,
        },
      ])
      .execute();
  }

  async findAll() {
    const usuariosComEndereco = await this.repository
      .createQueryBuilder()
      .select('usuarios')
      .from(Usuario, 'usuarios')
      .orderBy('usuarios.id', 'DESC')
      .getRawOne();
    return usuariosComEndereco;
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({ id: id });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.repository.update(id, updateUsuarioDto);
  }

  async remove(id: number) {
    return await this.repository.delete({ id: id });
  }
}
