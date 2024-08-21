import { PartialType } from '@nestjs/mapped-types';
import { CreateIdkDto } from './create-idk.dto';

export class UpdateIdkDto extends PartialType(CreateIdkDto) {}
