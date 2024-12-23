import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionDto } from './dto/CreateQuestionDto';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async createNewQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = this.questionRepository.create({
      ...question,
      quiz,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return await this.questionRepository.save(newQuestion);
  }
}
