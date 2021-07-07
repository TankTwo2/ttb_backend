import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../secret_config.json';

const env = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: env === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: env === 'prod',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.host,
      port: config.port,
      username: config.user,
      password: config.password,
      database: env === 'dev' ? 'TTS_DATABASE_DEV' : 'TTS_DATABASE',
      synchronize: true,
      logging: false,
      entities: ['src/entity/**/*.ts'],
    }),
  ],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
