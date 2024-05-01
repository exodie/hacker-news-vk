import { createSlice } from '@reduxjs/toolkit'

import { StoriesState } from '@/features'

const initialState: StoriesState = {
  storiesIds: [],
  storiesItems: []
}

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    setIds: (state, action) => {
      state.storiesIds = action.payload
    },
    setItems: (state, action) => {
      state.storiesItems = [...state.storiesItems, action.payload]
    },
    reset: (state) => {
      state.storiesIds = []
      state.storiesItems = []
    }
  }
})

export const { setIds, setItems, reset } = storiesSlice.actions

export const storiesReducer = storiesSlice.reducer
