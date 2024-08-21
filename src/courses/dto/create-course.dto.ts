import { IsDecimal, isDecimal, IsString, isNotEmpty, IsNotEmpty } from "class-validator";
export class CreateCourseDto{
    courseTitle: string;
    institute:   string;
    location:    string;
    duration:    number;
    rating:      number;
    startsAt:    number;
    description: string;
}