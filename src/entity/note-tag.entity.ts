import { ManyToOne, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Note } from './note.entity';

@Entity({ name: 'ttb_note_tag_data' })
export class NoteTag {
  @PrimaryGeneratedColumn()
  seq: number;

  @ManyToOne(() => Note, (note) => note.tag)
  tag: string;
}
