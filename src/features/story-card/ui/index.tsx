import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { Card, Spinner } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { setItems } from '@/features'

import { getStoryById, StoryContent, StoryType } from '@/entities'

interface Props {
  storyId: number
}

export const StoryCard: FC<Props> = ({ storyId }) => {
  const story: StoryType | undefined = useSelector((state: RootState) =>
    state.stories.storiesItems.find((story) => story.id === storyId)
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const get = async () => {
      dispatch(setItems(await getStoryById(storyId)))
    }
    if (!story) get()
  }, [dispatch, story, storyId])

  const router = useRouteNavigator()

  const cardClickHandler = () => {
    router.push(`/story/${storyId}`)
  }

  return (
    <Card className={styles.wrapper} onClick={cardClickHandler}>
      {story ? <StoryContent story={story} /> : <Spinner />}
    </Card>
  )
}
