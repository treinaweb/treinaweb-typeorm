import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EnderecosService {
  constructor(
    @InjectRepository(Endereco) private repository: Repository<Endereco>,
  ) {}
  async create(createEnderecoDto: CreateEnderecoDto) {
    return await this.repository.save(createEnderecoDto);
  }

  async findAll() {
    return await this.repository
      .createQueryBuilder('endereco')
      .leftJoinAndSelect('endereco.usuario', 'usuario')
      .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} endereco`;
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return `This action updates a #${id} endereco`;
  }

  remove(id: number) {
    return `This action removes a #${id} endereco`;
  }
}
