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
    return this.noteService.getNotes();
  }

  @Get('lastNote')
  async getLastNote(): Promise<Note> {
    return this.noteService.getLastNote();
  }

  @Get('tagList')
  async getTagList(): Promise<{ tag: string }[]> {
    const getData = [];

    (await this.noteTagService.getTagList()).forEach((row) =>
      getData.push(row.tag),
    );
    return getData;
  }

  @Post()
  async writeNote(@Body() writeData) {
    await this.noteService.writeNote(writeData);
    await this.noteTagService.writeNoteTag(writeData);
  }

  @Put()
  async editNote(@Body() editData) {
    await this.noteService.editNote(editData);
    await this.noteTagService.editNoteTag(editData);
  }

  @Delete()
  async delNote(@Body() body) {
    await this.noteService.delNote(body);
  }
}
