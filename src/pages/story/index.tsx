import { FC } from 'react'

import { NavIdProps, Panel } from '@vkontakte/vkui'

import { Header, StoryWrapper } from '@/widgets'

export const Story: FC<NavIdProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <Header nav={'story'} />
      <StoryWrapper />
    </Panel>
  )
}
