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
    return await this.repository.save(createUsuarioDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({ id: id });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.repository.update(id, updateUsuarioDto);
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
