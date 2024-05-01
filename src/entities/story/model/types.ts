import { CommentType } from '@/entities'

export type StoryType = {
  by: string
  descendants: number
  id: number
  kids: Pick<CommentType, 'id'>[]
  score: number
  time: number
  title: string
  type: string
  url: string
}
