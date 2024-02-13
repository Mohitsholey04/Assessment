// import the necessary modules and define the JwtStrategy class

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {       // Extend the PassportStrategy class to create the JwtStrategy class
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),   // Extract the JWT from the request's Authorization header
            ignoreExpiration: false,    // Do not ignore the token's expiration
            secretOrKey: 'key', // Replace 'your_secret_key_here' with your actual secret key
        });
    }

    validate(payload : any): any {      // Define the validate method to validate the user's token and return the payload
        return payload;
    }
}
