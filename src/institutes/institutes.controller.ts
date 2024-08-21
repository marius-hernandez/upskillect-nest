import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { InstitutesService } from './institutes.service';
import { Prisma } from '@prisma/client';

@Controller('institutes')
export class InstitutesController {
  constructor(private readonly institutesService: InstitutesService) {}

  @Post()
  create(@Body() createInstituteDto: Prisma.InstituteCreateInput) {
    return this.institutesService.create(createInstituteDto);
  }

  @Get()
  findAll() {
    return this.institutesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.institutesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstituteDto: Prisma.InstituteUpdateInput) {
    return this.institutesService.update(+id, updateInstituteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.institutesService.remove(+id);
  }
}
