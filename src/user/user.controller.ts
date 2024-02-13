// import the necessary modules

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// Define the UserController and import the necessary modules
@Controller('user')
export class UserController {
  // Inject the UserService
  constructor(private readonly userService: UserService) {}

  // Define the Post method to create a new user
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // Define the Get method to find all users
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // Define the Get method to find a user by age
  @Get("/age/:age")
  findUserByAge(@Param('age') age: number) {
    return this.userService.findUserByAge(Number(age));
  }

  // Define the Get method to find a user by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  // Define the Patch method to update a user by ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  // Define the Delete method to remove a user by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
