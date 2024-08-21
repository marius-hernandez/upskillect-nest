import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class InstitutesService {
  constructor(private readonly databaseService: DatabaseService){

  }

  async create(createInstituteDto: Prisma.InstituteCreateInput) {
    return this.databaseService.institute.create({
      data:createInstituteDto
    })
  }

  async findAll() {
    return this.databaseService.institute.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.institute.findUnique({
      where:{id}
    })
  }

  async update(id: number, updateInstituteDto:Prisma.InstituteUpdateInput) {
    return this.databaseService.institute.update({
      where:{id},
      data:updateInstituteDto
    })
  }

  async remove(id: number) {
    return this.databaseService.institute.delete({
      where:{id}
    })
  }
}
