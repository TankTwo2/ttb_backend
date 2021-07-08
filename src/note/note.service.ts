import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from 'src/entity/note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  getNotes(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  writeNote(writeData) {
    console.log(writeData);
  }

  editNote(editData) {
    console.log(editData);
  }

  delNote(seqId) {
    console.log(seqId);
  }
}
