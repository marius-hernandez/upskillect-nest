import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { InstitutesService } from './institutes.service';
import { CreateInstituteDto } from 'src/institutes/dto/create-institutes.dto';
import { UpdateInstituteDto } from 'src/institutes/dto/update-institutes.dto';

@Controller('institutes')
export class InstitutesController {
  constructor(private readonly institutesService: InstitutesService) {}

  @Get()
  getInstitutes() {
    return this.institutesService.getInstitutes();
  }
  @Post()
  createInstitutes(@Body(ValidationPipe) institute: CreateInstituteDto) {
    return this.institutesService.createInstitutes(institute);
  }

  @Get(':uuid')
  getInstitute(@Param('uuid') uuid: string) {
    return this.institutesService.getInstitute(uuid);
  }
  @Patch(':uuid')
  updateInstitute(@Param('uuid') uuid: string, @Body() institute: UpdateInstituteDto) {
    return this.institutesService.updateInstitute(uuid, institute);
  }

  @Delete(':uuid')
  deleteInstitute(@Param('uuid') uuid: string) {
    return this.institutesService.deleteInstitute(uuid);
  }
}
