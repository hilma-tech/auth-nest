import { Reflector } from '@nestjs/core';
import { Injectable } from '@nestjs/common';

import { CreateAuthGuard } from '../functions/create-auth-guard.function';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtAuthGuard extends CreateAuthGuard('jwt') {
	constructor(
		public readonly userService: UserService,
		public readonly reflector: Reflector,
	) {
		super(userService, reflector);
	}
}