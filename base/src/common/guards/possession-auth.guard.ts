import { Reflector } from '@nestjs/core';
import { Injectable } from '@nestjs/common';

import { CreateAuthGuard } from '../functions/create-auth-guard.function';
import { UserService } from '../../user/user.service';

@Injectable()
export class PossessionAuthGuard extends CreateAuthGuard('possession') {
	constructor(
		public readonly userService: UserService,
		public readonly reflector: Reflector,
	) {
		super(userService, reflector);
	}
}