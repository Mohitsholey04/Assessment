// import the necessary modules and define the AuthService class

import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/entities/user.entity";

// Define the AuthService class and inject the JwtService
@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {      // Inject the JwtService

    }

    generateToken(payload: User): string {   // Define the generateToken method to generate a token for the user
        return this.jwtService.sign(payload);       // Sign the payload to generate a token for the user
    }
}