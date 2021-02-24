import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PlatformsModule } from './platforms/platforms.module';

@Module({
  imports: [UsersModule, PlatformsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
