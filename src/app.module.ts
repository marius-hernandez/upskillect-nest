import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';
import { InstitutesModule } from './institutes/institutes.module';
import { IdkModule } from './courses/idk/idk.module';

@Module({
  imports: [CoursesModule, DatabaseModule, InstitutesModule, IdkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
