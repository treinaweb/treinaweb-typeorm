import { Injectable } from '@nestjs/common';
import { CreateFotoDto } from './dto/create-foto.dto';
import { UpdateFotoDto } from './dto/update-foto.dto';
import { Foto } from './entities/foto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FotosService {
  constructor(@InjectRepository(Foto) private repository: Repository<Foto>) {}
  async create(createFotoDto: CreateFotoDto) {
    return await this.repository.save(createFotoDto);
  }

  async findAll() {
    return await this.repository.find({
      relations: {
        usuario: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} foto`;
  }

  update(id: number, updateFotoDto: UpdateFotoDto) {
    return `This action updates a #${id} foto`;
  }

  remove(id: number) {
    return `This action removes a #${id} foto`;
  }
}
