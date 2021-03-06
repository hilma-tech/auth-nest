declare global {
	namespace Express {
		interface User { }
		interface Request {
			user?: User;
		}
	}
}

export { SetAuthMetadata } from './common/decorators/set-auth-metadata.decorator';
export { TwoFactor } from './two-factor/two-factor.entity';
export { TwoFactorModule } from './two-factor/two-factor.module';
export { TwoFactorService } from './two-factor/two-factor.service';
export { KnowledgeAuthGuard } from './common/guards/knowledge-auth.guard';
export { PossessionAuthGuard } from './common/guards/possession-auth.guard';
export { TwoFactorOptions } from './common/interfaces/two-factor-options.interface';
export { ACCESS_TOKEN, defaultTwoFactorOptions, TWO_FACTOR_OPTIONS, TWO_FACTOR_TOKEN } from './common/constants';
export { JwtAuthInterceptor } from './common/interceptors/jwt-auth.interceptor';
export { Entities } from './common/decorators/entities.decorator';
export { RequestUser } from './common/decorators/request-user.decorator';
export { Roles } from './common/decorators/roles.decorator';
export { UserField } from './common/decorators/user-field.decorator';
export { UseJwtAuth } from './common/decorators/use-jwt-auth.decorator';
export { UseJwtInterceptor } from './common/decorators/use-jwt-interceptor.decorator';
export { UseKnowledgeAuth } from './common/decorators/use-knowledge-auth.decorator';
export { UseLocalAuth } from './common/decorators/use-local-auth.decorator';
export { UsePossessionAuth } from './common/decorators/use-possession-auth.decorator';
export { AuthGuard } from './common/functions/auth-guard.function';
export { createAuthDecorator } from './common/functions/create-auth-decorator.function';
export { createUserModuleMetadata } from './common/functions/create-user-module-metadata.function';
export { extractTokenFromCookie } from './common/functions/extract-token-from-cookie.function';
export { lookup } from './common/functions/lookup.function';
export { JwtAuthGuard } from './common/guards/jwt-auth.guard';
export { LocalAuthGuard } from './common/guards/local-auth.guard';
export { RequestUserType } from './common/interfaces/request-user-type.interface';
export { UseAuthGuard } from './common/interfaces/use-auth-guard.interface';
export { AuthConfig, AuthConfigSecretOrKey, AuthConfigAccessTokenCookie, AuthConfigAppName, AuthConfigAppNameHe, AuthConfigRoleAccess, AuthConfigTtl, AuthConfigVerificationEmail } from './common/interfaces/auth-config.interface';
export { SALT, USER_MODULE_OPTIONS, jwtConstants, EMAIL_VERIFIED, VERIFICATION_TOKEN } from './common/constants';
export { Role } from './role/role.entity';
export { RoleModule } from './role/role.module';
export { RoleService } from './role/role.service';
export { UserConfig } from './user/user.config.interface';
export { User } from './user/user.entity';
export { UserModule } from './user/user.module';
export { UserService } from './user/user.service';
export { MailerInterface, MailAttachments } from './mails/mailer.interface';
export { NodeMailerService } from './mails/MailService';
export { NodeMailerModule } from './mails/MailModule';
export { VerifyMailTemplate, ResetPasswordTemplate } from './mails/verifyMail.template';
export { LoginErrorCodes } from './common/loginErrorCodes';
export { AccessLogger, AccessLoggerModule, AccessLoggerService } from './access-logger';
export { UserPasswordModule, UserPassword, UserPasswordService } from './user-password';
export { SendCodeOptions } from './common/interfaces/send-code-options.interface';