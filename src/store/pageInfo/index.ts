import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PAGE_INFO_INIT_STATE_TYPE = {
	title?: string
	description?: string
	css?: string
	js?: string
}

const INIT_STATE: PAGE_INFO_INIT_STATE_TYPE = {
	title: '',
	description: '',
	css: '',
	js: '',
}

const pageInfoSlice = createSlice({
	name: 'pageInfo',
	initialState: INIT_STATE,
	reducers: {
		// 重置页面信息
		resetPageInfo: (
			_state: PAGE_INFO_INIT_STATE_TYPE,
			action: PayloadAction<PAGE_INFO_INIT_STATE_TYPE>
		) => {
			return action.payload
		},
	},
})

export const { resetPageInfo } = pageInfoSlice.actions
export default pageInfoSlice.reducer
