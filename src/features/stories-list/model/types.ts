import { StoryType } from '@/entities'

export type StoriesType = number[]

export type StoriesState = {
  storiesIds: StoriesType
  storiesItems: StoryType[]
}
