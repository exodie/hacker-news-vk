import { FC, useState } from 'react'

import { Card } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { CommentHeader } from './header'
import { CommentReplies } from './replies'
import { OpenReplies } from './show-replies'
import { CommentText } from './text'

import { CommentType } from '@/entities'

interface Props {
  comment: CommentType
}

export const CommentCard: FC<Props> = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [loadComments, setLoadComments] = useState<CommentType[]>([])

  return (
    <Card className={styles.comment}>
      <CommentHeader by={comment.by} time={comment.time} />
      <CommentText text={comment.text}></CommentText>
      <OpenReplies
        kids={comment.kids}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        loadComments={loadComments}
        setLoadComments={setLoadComments}
      />
      {isOpen && loadComments && <CommentReplies loadComments={loadComments} />}
    </Card>
  )
}
