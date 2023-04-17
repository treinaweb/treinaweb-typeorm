import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento) private repositoryEvento: Repository<Evento>,
    @InjectRepository(Usuario) private repositoryUsuario: Repository<Usuario>,
  ) {}
  async create(createEventoDto: CreateEventoDto) {
    const evento = new Evento();
    evento.nome = createEventoDto.nome;
    evento.descricao = createEventoDto.descricao;
    evento.data = createEventoDto.data;

    const eventoSalvo = await this.repositoryEvento.save(evento);

    const usuarios = await this.repositoryUsuario.findBy({
      id: In(createEventoDto.usuarios),
    });

    eventoSalvo.usuarios = usuarios;
    return await this.repositoryEvento.save(eventoSalvo);
  }

  async findAll() {
    return await this.repositoryEvento.find({
      relations: {
        usuarios: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} evento`;
  }

  update(id: number, updateEventoDto: UpdateEventoDto) {
    return `This action updates a #${id} evento`;
  }

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }
}
