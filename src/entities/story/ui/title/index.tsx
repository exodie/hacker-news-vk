import { FC } from 'react'

import { Text } from '@vkontakte/vkui'

import styles from './index.module.scss'

interface Props {
  title: string
}

export const StoryTitle: FC<Props> = ({ title }) => {
  return (
    <section className={styles.body}>
      <Text className={styles.title}>{title}</Text>
    </section>
  )
}
