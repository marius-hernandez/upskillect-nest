import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-user.dto';

@Controller('courses')
export class CoursesController {
    constructor (private readonly coursesService:CoursesService){}

    @Get()
    getCourses(
        @Query('limit', ParseIntPipe) limit?:number, 
        @Query('offset') offset?:number
    ){
        return this.coursesService.getCourses(offset, limit)
    }
    @Post()
    createCourse(@Body(ValidationPipe) course:CreateCourseDto){
        return this.coursesService.postCourse(course)
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
