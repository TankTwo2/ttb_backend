import { Injectable } from '@nestjs/common';

@Injectable()
export class NoteService {
  getNotes(): string[] {
    return ['1', '2', '3'];
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
