import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PlatoonModule } from './platoon/platoon.module';
import { GroupModule } from './group/group.module';
import { MessageModule } from './message/message.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './db-service.service';

@Module({
  imports: [UserModule, PlatoonModule, GroupModule, MessageModule, AuthModule],
  controllers: [],
  providers: [

    PrismaService],
})
export class AppModule { }
