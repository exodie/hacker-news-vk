import { FC } from 'react'

import { Text } from '@vkontakte/vkui'

import styles from './index.module.scss'

interface Props {
  text: string
}

export const CommentText: FC<Props> = ({ text }) => {
  return (
    <section className={styles.body}>
      <Text className={styles.text}>{text}</Text>
    </section>
  )
}
