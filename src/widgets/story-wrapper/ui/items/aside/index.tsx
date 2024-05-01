import { FC } from 'react'

import { Icon16Linked } from '@vkontakte/icons'
import { Link, Title } from '@vkontakte/vkui'

import styles from './index.module.scss'

interface Props {
  url: string
}

export const StoryItemAside: FC<Props> = ({ url }) => {
  return (
    <div className={styles.aside}>
      <Title className={styles.title}>Новость</Title>
      <Link href={url} target={'_blank'} className={styles.link}>
        <Icon16Linked></Icon16Linked>
      </Link>
    </div>
  )
}
