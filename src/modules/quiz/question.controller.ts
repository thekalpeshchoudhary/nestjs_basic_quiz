import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestionDto';
import { QuestionService } from './question.service';
import { QuizService } from './quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
  ) {}

  @Post('/')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto) {
    const quiz = await this.quizService.getQuizById(question.quizId);
    return await this.questionService.createNewQuestion(question, quiz);
  }
}
