import ky from 'ky'

import { CommentType } from '@/entities'

import { ITEM_URL } from '@/shared'

export const getCommentById = async (commentId: number) => {
  const res = await ky.get(`${ITEM_URL + commentId}.json`).json<CommentType>()
  return res
}
