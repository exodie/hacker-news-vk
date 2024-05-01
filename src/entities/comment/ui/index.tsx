import { useState } from 'react'

import { Card } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { CommentHeader } from './header'
import { CommentReplies } from './replies'
import { CommentText } from './text'
import { OpenReplies } from './show-replies'

import { CommentType } from '@/entities'

interface Props {
  comment: CommentType
}

export const CommentCard = (props: Props) => {
  const { comment } = props

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
