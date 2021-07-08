import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';
import { TypeOrmModule } from '@nestjs/typeorm';

const env = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      ignoreEnvFile: env === 'prod',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: env === 'dev' ? 'TTS_DATABASE_DEV' : 'TTS_DATABASE',
      synchronize: true,
      logging: false,
      entities: ['entity/**/*.ts'],
    }),
  ],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
