import { createSlice } from '@reduxjs/toolkit'

import { StoryState } from '@/widgets'

const initialState: StoryState = {
  story: null
}

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    set: (state, action) => {
      state.story = action.payload
    }
  }
})

export const { set } = storySlice.actions

export const storyReducer = storySlice.reducer
