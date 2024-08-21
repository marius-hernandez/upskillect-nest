import { IsDecimal, isDecimal, IsString, isNotEmpty, IsNotEmpty } from "class-validator";
export class CreateCourseDto{
    @IsString()
    @IsNotEmpty()
    courseTitle: string;
    institute:   string;
    location:    string;
    duration:    number;
    rating:      number;
    startsAt:    number;
    description: string;
}