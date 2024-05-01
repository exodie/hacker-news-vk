import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Icon24Comment } from '@vkontakte/icons'
import { Button, Spinner, Text, Title } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { getCountComments, set, updateStoryById } from '@/widgets'

import { CommentType } from '@/entities'

interface Props {
  comments: CommentType[]
  storyId: number
}

export const CommentsHeading = (props: Props) => {
  const { comments, storyId } = props

  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  async function updateComments() {
    setIsLoading(true)
    
    const updatedStory = await updateStoryById(storyId)
    dispatch(set(updatedStory))

    setIsLoading(false)
  }

  return (
    <div className={styles.heading}>
      <div className={styles.block}>
        <Title className={styles.title}>Комментарии</Title>
        <div className={styles.count}>
          {getCountComments(comments)}
          <Icon24Comment></Icon24Comment>
        </div>
      </div>
      <Button mode={'secondary'} size={'l'} onClick={updateComments}>
        {!isLoading ? <Text>Обновить комментарии</Text> : <Spinner />}
      </Button>
    </div>
  )
}
