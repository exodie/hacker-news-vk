import { Div } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { StoryHeader } from './header'
import { StoryScore } from './score'
import { StoryTitle } from './title'

import { StoryType } from '@/entities'

interface Props {
  story: StoryType
}

export const StoryContent = (props: Props) => {
  const { story } = props

  return (
    <Div className={styles.content}>
      <StoryHeader by={story.by} time={story.time} />
      <StoryTitle title={story.title} />
      <StoryScore score={story.score} />
    </Div>
  )
}
