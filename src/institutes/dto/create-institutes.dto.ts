import { IsString, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateInstituteDto {
    @IsNotEmpty()
    institute:string
    @IsNotEmpty()
    location: string
    rating:      number
    description: string
}
