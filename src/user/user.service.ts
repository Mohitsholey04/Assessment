// import the necessary modules and define the UserService class

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repo/user.repository';

// Define the UserService and import the necessary modules
@Injectable()
export class UserService {
// Inject the UserRepository
  constructor(private readonly userRepository: UserRepository) {}

  // Define the Create method to create a new user
  create(createUserDto: CreateUserDto): Promise<User> {
    let user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.age = createUserDto.age;
    return this.userRepository.save(user);      // Save the new user
  }

  // Define the Get method to find a user by age
  findUserByAge(age: number) {
    return this.userRepository.getUserByAge(age);   // Find the user by age
  }
// Define the Get method to find all users
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Define the Get method to find a user by ID
  findOne(id: number){        
    return this.userRepository.findOne({ where: { id } });    // Find the user by ID
  }

  // Define the Patch method to update a user by ID
  update(id: number, updateUserDto: UpdateUserDto) {    // Update the user by ID
    let user = new User();        // Create a new user object
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.age = updateUserDto.age;
    user.id = id;
    return this.userRepository.save(user);      // Save the updated user
  }

  // Define the Delete method to remove a user by ID
  remove(id: number) {        // Remove the user by ID
    return this.userRepository.delete(id);      // Delete the user by ID
  }
}
