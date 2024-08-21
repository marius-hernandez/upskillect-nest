import { PartialType } from "@nestjs/mapped-types";
import { CreateInstituteDto } from "./create-institutes.dto";

export class UpdateInstituteDto extends PartialType(CreateInstituteDto){}