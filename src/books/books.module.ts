import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

import { MongooseModule } from '@nestjs/mongoose';
import { BooksSchema } from './books.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Books', schema: BooksSchema }])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
