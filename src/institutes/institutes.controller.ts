import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe, ParseUUIDPipe } from '@nestjs/common';
import { InstitutesService } from './institutes.service';
import { CreateInstituteDto } from 'src/institutes/dto/create-institutes.dto';
import { UpdateInstituteDto } from 'src/institutes/dto/update-institutes.dto';

@Controller('institutes')
export class InstitutesController {
  constructor(private readonly institutesService: InstitutesService) {}

  @Get() // done
  getInstitutes() {
    return this.institutesService.getInstitutes();
  }
  @Post() // done
  createInstitutes(@Body(ValidationPipe) institute: CreateInstituteDto) {
    return this.institutesService.createInstitutes(institute);
  }

  @Get(':uuid') //done
  getInstitute(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.institutesService.getInstitute(uuid);
  }
  @Patch(':uuid') // done
  updateInstitute(@Param('uuid') uuid: string, @Body() institute: UpdateInstituteDto) {
    return this.institutesService.updateInstitute(uuid, institute);
  }

  @Delete(':uuid') //done
  deleteInstitute(@Param('uuid') uuid: string) {
    return this.institutesService.deleteInstitute(uuid);
  }
}
