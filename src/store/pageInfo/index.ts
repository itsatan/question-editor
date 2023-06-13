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
		// 修改网页标题
		changePageTitle: (state: PAGE_INFO_INIT_STATE_TYPE, action: PayloadAction<string>) => {
			state.title = action.payload
		},
	},
})

export const { resetPageInfo, changePageTitle } = pageInfoSlice.actions
export default pageInfoSlice.reducer
