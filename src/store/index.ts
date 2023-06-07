import { configureStore } from '@reduxjs/toolkit'
import questionReducer, { INIT_STATE_TYPE } from './question'

export type STATE_TYPE = {
	question: INIT_STATE_TYPE
}

export default configureStore({
	reducer: {
		question: questionReducer,
	},
})
