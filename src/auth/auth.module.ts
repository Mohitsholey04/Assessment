// import the necessary modules and define the AuthModule class

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

// import the necessary modules and define the AuthModule class
@Module({
    imports: [PassportModule, UserModule, JwtModule.register({  // configure the JwtModule
        secret: 'key',
        signOptions: { expiresIn: '60s' },
    })],
    controllers: [],
    providers: [LocalStrategy, JwtStrategy, AuthService],   // provide the LocalStrategy, JwtStrategy, and AuthService
    exports: [AuthService],
})
export class AuthModule {}
