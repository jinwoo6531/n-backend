import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jinwoo',
      password: '5514',
      database: 'n-backend',
      synchronize: true, //DB 마이그레이션
      logging: true, //무슨일이 일어나든 콘솔에 표시
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
