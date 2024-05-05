import { PaginationParams } from '@/core/repositories/pagination.params'
import { QuestionComment } from '../../enterprise/entities/question-comment'

export abstract class QuestionCommentsRepository {
  abstract findById(id: string): Promise<QuestionComment | null>
  abstract findManyByQuestionId(
    answerId: string,
    params: PaginationParams,
  ): Promise<QuestionComment[]>

  abstract create(answerComment: QuestionComment): Promise<void>
  abstract delete(answerComment: QuestionComment): Promise<void>
}
