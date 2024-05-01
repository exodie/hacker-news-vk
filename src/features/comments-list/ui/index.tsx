import { FC } from 'react'

import { Div, Title } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { CommentCard, CommentType } from '@/entities'

interface Props {
  comments: CommentType[]
}

export const CommentsList: FC<Props> = ({ comments }) => {
  return comments.length ? (
    <Div className={styles.content}>
      {comments.map((comment) => (
        <CommentCard comment={comment} key={comment.id} />
      ))}
    </Div>
  ) : (
    <Title level={'3'}>Комментариев пока нет</Title>
  )
}
