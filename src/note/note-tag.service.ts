import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteTag } from 'src/entity/note-tag.entity';

@Injectable()
export class NoteTagService {
  constructor(
    @InjectRepository(NoteTag)
    private noteTagRepository: Repository<NoteTag>,
  ) {}

  getNotes(): Promise<NoteTag[]> {
    return this.noteTagRepository.find();
  }

  async writeNoteTag(writeTagData) {
    await this.noteTagRepository.save(writeTagData);
  }

  async editNoteTag(editData) {
    await this.noteTagRepository.save(editData);
  }

  async delNoteTag(seqId) {
    await this.noteTagRepository.remove(seqId);
  }
}
