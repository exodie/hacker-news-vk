import { FC } from 'react'

import { Div, NavIdProps, Panel } from '@vkontakte/vkui'

import { Aside, Header } from '@/widgets'

import { Stories } from '@/features'

export const Home: FC<NavIdProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <Header />
      <Div>
        <Aside />
        <Stories />
      </Div>
    </Panel>
  )
}
