// import the necessary modules and define the LocalStrategy class

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";
import { UserRepository } from "src/user/repo/user.repository";


// Define the LocalStrategy class and extend the PassportStrategy class
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {     // Extend the PassportStrategy class to create the LocalStrategy class
  constructor(
    private readonly userRepository: UserRepository,  // Inject the UserRepository
  ) {      
    super();
  }

  async validate(username: string, password: string): Promise<User> {     // Define the validate method to validate the user's credentials
    const user : User = await this.userRepository.getUserByUsername(username);  // Use userRepository instead of UserRepository
    if(user === undefined){           // If the user is undefined, throw an UnauthorizedException   
      throw new UnauthorizedException();
    }
    if(user != undefined && user.password == password) return user;   // If the user is not undefined and the password is correct, return the user
    else throw new UnauthorizedException();
  }
}
