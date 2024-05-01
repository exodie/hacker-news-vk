import { FC } from 'react'

import styles from './index.module.scss'

import { CommentsList } from '@/features/comments-list'
import { StoryItemAside } from '@/widgets/story-wrapper/ui/items/aside'
import { CommentsHeading } from '@/widgets/story-wrapper/ui/items/comment-heading'

import { StoryCommentType } from '@/widgets'

import { StoryContent } from '@/entities'

interface Props {
  fullStory: StoryCommentType
}

export const StoryItem: FC<Props> = ({ fullStory }) => {
  return (
    <div className={styles.wrapper}>
      <StoryItemAside url={fullStory.url} />
      <StoryContent story={fullStory} />
      <CommentsHeading comments={fullStory.comments} storyId={fullStory.id} />
      <CommentsList comments={fullStory.comments} />
    </div>
  )
}
