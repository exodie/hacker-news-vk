import ky from 'ky'

import { StoryType } from 'entities'

import { ITEM_URL } from '@/shared'

export const getStoryById = async (storyId: number) => {
  const res = await ky.get(`${ITEM_URL + storyId}.json`).json<StoryType>()
  return res
}
