import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { Icon28ArrowLeftOutline, Icon28BugOutline } from '@vkontakte/icons'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { PanelHeader, Title } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { set } from '@/widgets'

interface Props {
  nav?: string
}

export const Header: FC<Props> = ({ nav }) => {
  const router = useRouteNavigator()

  const dispatch = useDispatch()

  function hanlerBack() {
    dispatch(set(null))
    router.push('/')
  }

  return (
    <PanelHeader
      before={
        nav === 'story' && (
          <div className={styles.button} onClick={hanlerBack}>
            <Icon28ArrowLeftOutline aria-label={'go-back'} />
            <label>Назад</label>
          </div>
        )
      }
    >
      <div className={styles.content}>
        <Icon28BugOutline />
        <Title>Hacker News</Title>
      </div>
    </PanelHeader>
  )
}
