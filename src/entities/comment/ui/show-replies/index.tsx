import { Dispatch, FC, SetStateAction, useState } from 'react'

import { Button, IconButton, Spinner, Text } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { CommentType, getCommentById } from '@/entities'

interface Props {
  kids: Pick<CommentType, 'id'>[]
  loadComments: CommentType[]
  setLoadComments: Dispatch<SetStateAction<CommentType[]>>
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}

export const OpenReplies: FC<Props> = ({
  kids,
  setLoadComments,
  loadComments,
  setIsOpen,
  isOpen
}) => {
  const [isLoading, setIsLoading] = useState(false)

  async function loadReplyComments() {
    setIsLoading(true)
    if (loadComments.length === 0) {
      const comments = await Promise.all([
        ...kids.map((kid) => {
          return getCommentById(+kid)
        })
      ])
      comments.sort((a, b) => a.time - b.time)
      setLoadComments(comments)
    }
    setIsLoading(false)
  }

  function toggleReplyComments() {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      {kids && (
        <div>
          {!isOpen ? (
            <IconButton
              className={styles.show}
              onClick={async () => {
                await loadReplyComments()
                toggleReplyComments()
              }}
            >
              {!isLoading ? (
                <Button mode="tertiary" size="m">
                  <Text aria-label="Показать ответы">
                    Показать ответы ({kids.length})
                  </Text>
                </Button>
              ) : (
                <Spinner size={'medium'} />
              )}
            </IconButton>
          ) : (
            <IconButton className={styles.show} onClick={() => toggleReplyComments()}>
              <Button mode="tertiary" size="m">
                <Text aria-label="Скрыть ответы">Скрыть ответы ({kids.length})</Text>
              </Button>
            </IconButton>
          )}
        </div>
      )}
    </>
  )
}
