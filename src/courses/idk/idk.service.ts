import { Injectable } from '@nestjs/common';
import { CreateIdkDto } from './dto/create-idk.dto';
import { UpdateIdkDto } from './dto/update-idk.dto';

@Injectable()
export class IdkService {
  create(createIdkDto: CreateIdkDto) {
    return 'This action adds a new idk';
  }

  findAll() {
    return `This action returns all idk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} idk`;
  }

  update(id: number, updateIdkDto: UpdateIdkDto) {
    return `This action updates a #${id} idk`;
  }

  remove(id: number) {
    return `This action removes a #${id} idk`;
  }
}
