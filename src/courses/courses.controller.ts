import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCoursesDto } from './dto/create-courses.dto';
import { UpdateCoursesDto } from './dto/update-courses.dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService){}
    @Get()
    findAll(){
        return this.coursesService.findAll()
    }
    @Get(':id')
    findById(@Param('id')id: string){
        return this.coursesService.findById(id)
    }
    @Post()
   
    create(@Body() createCourseDto: CreateCoursesDto){
        return this.coursesService.create(createCourseDto)
    }
    @Patch(':id')
    update(@Param('id')id: string, @Body()updateCourseDto: UpdateCoursesDto){
        return this.coursesService.update(id, updateCourseDto)
    }
    @Delete(':id')
    remove(@Param('id')id: string){
        return this.coursesService.remove(id)
    }
}
