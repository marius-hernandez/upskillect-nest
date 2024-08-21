import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { IdkModule } from './idk/idk.module';

@Module({
    controllers: [CoursesController],
    providers: [CoursesService],
    imports: [IdkModule],
})
export class CoursesModule {}
