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

  async writeNote(writeData) {
    await this.noteRepository.save(writeData);
  }

  async editNote(editData) {
    await this.noteRepository.save(editData);
  }

  async delNote(seqId) {
    await this.noteRepository.remove(seqId);
  }
}
