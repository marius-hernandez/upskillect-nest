import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Prisma } from '@prisma/client';

@Controller('courses')
export class CoursesController {
    constructor (private readonly coursesService:CoursesService){}

    @Get()
    getCourses(
        @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
        @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number
    ) {
        return this.coursesService.getCourses(offset, limit);
    }
    
    @Post()
    postCourse(@Body(ValidationPipe) course:Prisma.CourseCreateInput){
        return this.coursesService.postCourse(course)
    }
    @Patch(':id')
    updateCourse(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) course:Prisma.CourseUpdateInput){
        return this.coursesService.updateCourse(course)
    }
    @Get(':uuid')
    getCourse(@Param('uuid', ParseIntPipe) uuid:string){
        return this.coursesService.getCourse(uuid)
    }
    
}
