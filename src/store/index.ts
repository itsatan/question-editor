import { configureStore } from '@reduxjs/toolkit'
import questionReducer, { QUESTION_INIT_STATE_TYPE } from './question'
import pageInfoReducer, { PAGE_INFO_INIT_STATE_TYPE } from './pageInfo'

export type STATE_TYPE = {
	question: QUESTION_INIT_STATE_TYPE
	pageInfo: PAGE_INFO_INIT_STATE_TYPE
}

export default configureStore({
	reducer: {
		question: questionReducer,
		pageInfo: pageInfoReducer,
	},
})
