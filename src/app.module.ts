import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { AdminModule } from './admin/admin.module';

@Module({
	imports: [TypeOrmModule.forRoot(), UserModule, RoleModule, AdminModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
