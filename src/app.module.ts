import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';
import { InstitutesModule } from './institutes/institutes.module';
import { DummyModule } from './dummy/dummy.module';

@Module({
  imports: [CoursesModule, DatabaseModule, InstitutesModule, DummyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
