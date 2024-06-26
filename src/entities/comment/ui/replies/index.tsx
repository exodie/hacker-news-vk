import { FC } from 'react'

import styles from './index.module.scss'

import { CommentHeader } from '../header'
import { CommentText } from '../text'

import { CommentType } from '@/entities'

interface Props {
  loadComments: CommentType[]
}

export const CommentReplies: FC<Props> = ({ loadComments }) => {
  return (
    <>
      {loadComments.map((comment) => (
        <div className={styles.reply} key={comment.id}>
          <CommentHeader by={comment.by} time={comment.time} />
          <CommentText text={comment.text} />
        </div>
      ))}
    </>
  )
}
