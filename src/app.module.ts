import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './typeorm/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [AuthModule, UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1233',
      database: 'testuser', 
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
