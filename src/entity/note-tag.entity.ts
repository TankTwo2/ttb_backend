import { ManyToOne, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Note } from './note.entity';

@Entity({ name: 'ttb_note_tag_data' })
export class NoteTag {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  tag: string;

  @ManyToOne(() => Note, (note) => note.postNumber)
  seq: Note;
}
