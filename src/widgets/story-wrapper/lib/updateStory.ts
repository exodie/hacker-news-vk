import { getCommentById, getStoryById } from '@/entities'

export async function updateStoryById(id: string | number) {
  const story = await getStoryById(+id)

  if (!story.kids)
    return {
      ...story,
      comments: []
    }

  const comments = await Promise.all([
    ...story.kids.map((kid) => {
      return getCommentById(+kid)
    })
  ])

  comments.sort((a, b) => b.time - a.time)

  return {
    ...story,
    comments
  }
}
