import { configureStore } from '@reduxjs/toolkit'
import questionReducer from './question'

export default configureStore({
	reducer: {
		question: questionReducer,
	},
})
