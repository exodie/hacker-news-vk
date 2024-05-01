import { FC } from 'react'

import { Icon28User } from '@vkontakte/icons'
import { Text } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { convertDate } from '@/shared'

interface Props {
  by: string
  time: number
}

export const CommentHeader: FC<Props> = ({ by, time }) => {
  return (
    <header className={styles.header}>
      <Icon28User></Icon28User>
      <article className={styles.info}>
        <Text>{by}</Text>
        <Text>{convertDate(time)}</Text>
      </article>
    </header>
  )
}
