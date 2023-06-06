import { createSlice } from '@reduxjs/toolkit'

const INIT_STATE = {}

export const questionSlice = createSlice({
	name: 'question',
	initialState: INIT_STATE,
	reducers: {},
})

export default questionSlice.reducer
