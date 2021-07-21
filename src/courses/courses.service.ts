import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Courses } from './entities/courses.entitys';

@Injectable()
export class CoursesService {
    private courses: Courses[] = [
        {
            id: 1,
            name: 'Fundamentos do nestjs',
            description: 'Breve introdução aos fundamentos do framework NestJs',
            rating: 5,
            tags: ['nodejs', 'typescript', 'express', 'backend']
        }
    ]
    findAll(){
        return this.courses
    }
    findById(id: string){
        const course = this.courses.find(course => course.id === +id)
        if(!course){
            throw new HttpException(`Curso com id ${id} não foi encontrado`, HttpStatus.NOT_FOUND)
        }
        return course
    }
    create(createCourseDto: any){
        this.courses.push(createCourseDto)
    }
    update(id: string, updateCourseDto: any){
        const indexCourse = this.courses.findIndex((course: Courses) => course.id === +id)
        this.courses[indexCourse] = updateCourseDto
    }
    remove(id: string){
        const indexCourse = this.courses.findIndex((course: Courses) => course.id === +id)
        if(indexCourse >= 0){
            this.courses.splice(indexCourse, 1)
        }
    }
}
