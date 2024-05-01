import ky from 'ky'

import { NEW_STORIES_URL } from '@/shared'

import { StoryType } from '@/entities'

export const getStories = async () => {
  const res = await ky.get(NEW_STORIES_URL).json<StoryType[]>()
  return res
}
