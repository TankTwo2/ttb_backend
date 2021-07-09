import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/entity/note.entity';
import { NoteTag } from 'src/entity/note-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Note, NoteTag])],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
