import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './dto/CreateQuizDto';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  getAllQuiz() {
    return [1, 2, 3];
  }

  async getQuizById(id: number) {
    return await this.quizRepository.findOne({
      where: { id },
      relations: ['questions'],
    });
  }

  async createNewQuiz(quiz: CreateQuizDto): Promise<Quiz> {
    return await this.quizRepository.save(quiz);
  }
}
