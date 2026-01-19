import { Injectable } from '@nestjs/common';
import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtFactory implements JwtOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createJwtOptions(): JwtModuleOptions {
    type ExpiresInType = NonNullable<JwtModuleOptions['signOptions']>['expiresIn'];

    const expiresIn = this.configService.get<string>('jwt.expiresIn') as ExpiresInType || '1h';

    return {
      secret: this.configService.get<string>('jwt.secret') || 'defaultSecret',
      signOptions: {
        expiresIn,
      },
    };
  }
}