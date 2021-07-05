import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';

@Module({
  imports: [],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
