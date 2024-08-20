import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor (private readonly coursesService:CoursesService){}


    @Get()
    getCourses(
        @Query('limit') limit?:string, 
        @Query('offset') offset?:string
    ){
        return this.coursesService.getCourses(+offset, +limit)
    }
    @Post()
    createCourse(@Body() course:string){
        return {course, message:"Haha"}
    }
    @Get(':id')
    getCourse(@Param('id') id:string){
        return {id}
    }
    
}
