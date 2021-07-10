import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Note } from 'src/entity/note.entity';
import { NoteTagService } from './note-tag.service';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(
    private readonly noteService: NoteService,
    private readonly noteTagService: NoteTagService,
  ) {}

  @Get()
  async getNotes(): Promise<Note[]> {
    console.log(await this.noteTagService.getNotes());
    return this.noteService.getNotes();
  }

  @Post()
  async writeNote(@Body() writeData) {
    this.noteService.writeNote(writeData);
    await writeData.tag.forEach((element) => {
      this.noteTagService.writeNoteTag({
        tag: element,
      });
    });
  }

  @Put()
  editNote(@Body() editData) {
    return this.noteService.editNote(editData);
  }

  @Delete()
  delNote(@Body() seqId) {
    return this.noteService.delNote(seqId);
  }
}
