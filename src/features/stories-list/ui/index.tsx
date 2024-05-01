import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './index.module.scss'

import { getStories, setIds, StoriesType, StoryCard } from '@/features'

import { COUNT_STORIES, Skeleton } from '@/shared'

export const Stories = () => {
  const storiesIds: StoriesType = useSelector(
    (state: RootState) => state.stories.storiesIds
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const get = async () => {
      dispatch(setIds(await getStories()))
    }
    if (storiesIds.length === 0) get()
  }, [dispatch, storiesIds])

  return (
    <div className={styles.wrapper}>
      {storiesIds.length > 0 &&
        storiesIds
          .slice(0, COUNT_STORIES)
          .map((storyId) => <StoryCard storyId={storyId} key={storyId} />)}

      {storiesIds.length === 0 && <Skeleton count={COUNT_STORIES} />}
    </div>
  )
}
