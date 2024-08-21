import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdkService } from './idk.service';
import { CreateIdkDto } from './dto/create-idk.dto';
import { UpdateIdkDto } from './dto/update-idk.dto';

@Controller('courses/idk')
export class IdkController {
  constructor(private readonly idkService: IdkService) {}

  @Post()
  create(@Body() createIdkDto: CreateIdkDto) {
    return this.idkService.create(createIdkDto);
  }

  @Get()
  findAll() {
    return this.idkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.idkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdkDto: UpdateIdkDto) {
    return this.idkService.update(+id, updateIdkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.idkService.remove(+id);
  }
}
