import { configureStore } from '@reduxjs/toolkit'

import { storyReducer } from '@/widgets'

import { storiesReducer } from '@/features'

export const store = configureStore({
  reducer: {
    stories: storiesReducer,
    story: storyReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
