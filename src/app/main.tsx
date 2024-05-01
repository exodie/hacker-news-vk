import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import vkBridge from '@vkontakte/vk-bridge'

import { AppConfig } from '@/app/config'
import { store } from '@/app/store'

vkBridge.send('VKWebAppInit')

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppConfig />
  </Provider>
)
