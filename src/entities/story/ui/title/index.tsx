import { Text } from '@vkontakte/vkui'

import styles from './index.module.scss'

interface Props {
  title: string
}

export const StoryTitle = (props: Props) => {
  const { title } = props

  return (
    <section className={styles.body}>
      <Text className={styles.title}>{title}</Text>
    </section>
  )
}
