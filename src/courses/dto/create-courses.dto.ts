import { IsNumber, IsString } from "class-validator"

export class CreateCoursesDto {
   @IsString() 
   readonly name: string
   @IsString()
   readonly description: string
   @IsNumber()
   readonly rating: number
   @IsString({each: true})
   readonly tags: string[]
}
