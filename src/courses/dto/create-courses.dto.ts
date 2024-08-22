import { IsString, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateCoursesDto {
    @IsNotEmpty()
    instituteUuid: string
    @IsNotEmpty()
    courseTitle: string
    @IsNotEmpty()
    duration: number
    @IsNotEmpty()
    rating: number
    @IsNotEmpty()
    startsAt: number
    description: string
}
