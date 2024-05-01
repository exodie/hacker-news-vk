import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig
} from '@vkontakte/vk-mini-apps-router'

import { DEFAULT_ROOT, DEFAULT_VIEW, DEFAULT_VIEW_PANELS } from '@/shared'

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [createPanel(DEFAULT_VIEW_PANELS.HOME, '/', [])]),
    createView(DEFAULT_VIEW, [createPanel(DEFAULT_VIEW_PANELS.STORY, '/story/:id', [])])
  ])
])

export const router = createHashRouter(routes.getRoutes())
