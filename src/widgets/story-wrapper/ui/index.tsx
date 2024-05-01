import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useParams } from '@vkontakte/vk-mini-apps-router'
import { Div, ScreenSpinner } from '@vkontakte/vkui'

import { StoryItem } from './items'

import { set, StoryCommentType, updateStoryById } from '@/widgets'

export const StoryWrapper = () => {
  const params = useParams<'id'>()

  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  const fullStory: StoryCommentType | null = useSelector(
    (state: RootState) => state.story.story
  )

  useEffect(() => {
    const getFullStory = async () => {
      setIsLoading(true)
      if (params?.id) {
        const fullStory = await updateStoryById(params.id)
        dispatch(set(fullStory))
      }
      setIsLoading(false)
    }
    getFullStory()
  }, [dispatch, params?.id])

  return (
    <Div>
      {isLoading ? (
        <ScreenSpinner />
      ) : (
        <>{fullStory && <StoryItem fullStory={fullStory} />}</>
      )}
    </Div>
  )
}
