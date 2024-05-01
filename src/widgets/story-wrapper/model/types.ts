import { StoryType, CommentType } from '@/entities'

export type StoryCommentType = StoryType & {
  comments: CommentType[]
}

export type StoryState = {
  story: StoryCommentType | null
}
