import { Injectable } from '@nestjs/common';
import { CreateInstituteDto } from 'src/institutes/dto/create-institutes.dto';
import { UpdateInstituteDto } from 'src/institutes/dto/update-institutes.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class InstitutesService {
  constructor(private readonly databaseService: DatabaseService){

  }

  async getInstitutes() {
    return this.databaseService.institute.findMany()
  }
  async getInstitute(uuid: string) {
    return this.databaseService.institute.findUnique({
      where:{uuid}
    })
  }

  async createInstitutes(institute: CreateInstituteDto) {
    return this.databaseService.institute.create({
      data:institute
    })
  }
  
  async updateInstitute(uuid: string, updateInstituteDto:UpdateInstituteDto) {
    return this.databaseService.institute.update({
      where:{uuid},
      data:updateInstituteDto
    })
  }

  async deleteInstitute(uuid: string) {
    return this.databaseService.institute.delete({
      where:{uuid}
    })
  }
}
