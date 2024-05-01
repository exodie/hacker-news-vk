export type CommentType = {
  id: number
  by: string
  descendants: number
  kids: Pick<CommentType, 'id'>[]
  parent: number
  text: string
  time: number
}
