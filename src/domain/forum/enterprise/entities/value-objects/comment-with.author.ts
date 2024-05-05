import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ValueObject } from '@/core/entities/value-object'

export interface CommentWithAuthorProps {
  commentId: UniqueEntityID
  authorId: UniqueEntityID
  content: string
  author: string
  createdAt: Date
  updatedAt?: Date | null
}

export class CommentWithAuthor extends ValueObject<CommentWithAuthorProps> {
  get commentId() {
    return this.props.commentId
  }

  get authorId() {
    return this.props.authorId
  }

  get content() {
    return this.props.content
  }

  get author() {
    return this.props.author
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(props: CommentWithAuthorProps) {
    return new CommentWithAuthor(props)
  }
}
