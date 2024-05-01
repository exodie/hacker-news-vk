import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button, Spinner, Text, Title } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { getStories, reset, setIds } from '@/features'

import { TIMEOUT_UPDATE_STORIES } from '@/shared'

export const Aside = () => {
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)

  async function updateStories() {
    setIsLoading(true)
    dispatch(reset())

    dispatch(setIds(await getStories()))
    setIsLoading(false)
  }

  useEffect(() => {
    const interval = setInterval(async () => {
      await updateStories()
    }, TIMEOUT_UPDATE_STORIES)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={styles.content}>
      <Title className={styles.text}>Новости</Title>
      <Button size="m" mode="secondary" onClick={updateStories}>
        {!isLoading ? <Text>Обновить новости</Text> : <Spinner />}
      </Button>
    </div>
  )
}
