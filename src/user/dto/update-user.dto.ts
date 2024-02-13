// import necessary modules
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// Define the UpdateUserDto class
export class UpdateUserDto extends PartialType(CreateUserDto) {     // extends the PartialType class
    firstName: string;
    lastName: string;
    age: number;
}
