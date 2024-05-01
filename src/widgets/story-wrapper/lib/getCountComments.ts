import { CommentType } from '@/entities'

export function getCountComments(comments: CommentType[]): number {
  let count = comments.length
  comments.map((comment) => {
    if (comment.kids) count += comment.kids.length
  })

  return count
}
