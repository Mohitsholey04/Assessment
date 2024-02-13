// Import the necessary modules and define the AppModule
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';


// Import the necessary modules and define the AppModule
@Module({
  imports: [
    TypeOrmModule.forRootAsync({  // configure the database connection
      imports: [ConfigModule.forRoot({  // configure the environment variables
        isGlobal: true,
        envFilePath: ".local.env",      // specify the environment file
        // envFilePath: ".prod.env",
      })],
      useFactory: (configService: ConfigService) => ({  // use the ConfigService to configure the database connection
        type: 'postgres',
        host: configService.get('DB_HOST'),       // get the environment variables
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],    // specify the entities
        logging: true,    // enable logging
      }),
      inject: [ConfigService],  // inject the ConfigService
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {} 
