import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
import { query } from 'express';

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
    createCourse(@Body(ValidationPipe) course:Prisma.CourseCreateInput){
        return this.coursesService.createCourse(course)
    }
    @Patch(':id')
    updateCourse(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) course:UpdateCourseDto){
        return this.coursesService.updateCourse(course)
    }
    @Get(':id')
    getCourse(@Param('id', ParseIntPipe) id:number){
        return this.coursesService.getCourse(id)
    }
    
}
