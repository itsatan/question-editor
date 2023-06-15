import { configureStore } from '@reduxjs/toolkit'
import undoable, { excludeAction, StateWithHistory } from 'redux-undo'
import questionReducer, { QUESTION_INIT_STATE_TYPE } from './question'
import pageInfoReducer, { PAGE_INFO_INIT_STATE_TYPE } from './pageInfo'

export type STATE_TYPE = {
	question: StateWithHistory<QUESTION_INIT_STATE_TYPE>
	pageInfo: PAGE_INFO_INIT_STATE_TYPE
}

export default configureStore({
	reducer: {
		question: undoable(questionReducer, {
			limit: 20, // 限制undo次数
			filter: excludeAction([
				'question/resetComponents',
				'question/changeSelectedId',
				'question/selectPrevComponent',
				'question/selectNextComponent',
			]), // 排除哪些action
		}),
		pageInfo: pageInfoReducer,
	},
})
