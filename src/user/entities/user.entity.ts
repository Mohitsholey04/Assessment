// Purpose: Entity class for the User table in the database.
// import the necessary modules
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Define the User entity
@Entity()
export class User {
    
    @PrimaryGeneratedColumn()       // auto-incrementing primary key
    id: number;

    @Column()                       
    firstName: string;              // column with a string type

    @Column()
    lastName: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    age: number;
}
