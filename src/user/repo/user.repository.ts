//import the necessary modules and define the UserRepository class

import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user.entity";


// Define the UserRepository class
@EntityRepository(User)     // Decorator to define the UserRepository class as an entity repository
export class UserRepository extends Repository<User> {          // Extends the Repository class

    getUserByAge(age: number): Promise<User>{     // Define the getUserByAge method to find a user by age
        return this.findOne( {           // Find the user by age
            where: {
                age: age,
                },
            });
        }

    getUserByUsername(username: string): Promise<User>{     // Define the getUserByUsername method to find a user by username
        return this.findOne( {           // Find the user by username
            where: {
                username: username,
                },
            });
        }
}

