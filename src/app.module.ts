import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://rodbacana:${process.env.MONGO_PASSWORD}@cluster0.qkmop.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    ),
    UsersModule,
  ],
})
export class AppModule {}
