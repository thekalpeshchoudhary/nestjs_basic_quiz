import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'Quiz requires a title' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty({ message: 'Quiz requires a description' })
  @Length(3)
  description: string;
}
