import { Icon16Bookmark } from '@vkontakte/icons'
import { Text } from '@vkontakte/vkui'

import styles from './index.module.scss'

interface Props {
  score: number
}

export const StoryScore = (props: Props) => {
  const { score } = props

  return (
    <div className={styles.score}>
      <Text>{score}</Text>
      <Icon16Bookmark></Icon16Bookmark>
    </div>
  )
}
