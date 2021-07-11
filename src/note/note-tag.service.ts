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
    writeTagData.tag.forEach((element) =>
      this.noteTagRepository.save({
        seq: writeTagData.postNumber,
        tag: element,
      }),
    );
  }

  async editNoteTag(editTagData) {
    // this.noteTagRepository.remove({ seq: editTagData.postNumber });
    editTagData.tag.forEach((element) =>
      this.noteTagRepository.save({
        seq: editTagData.postNumber,
        tag: element,
      }),
    );
  }
}
