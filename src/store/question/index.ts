import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '@/components'

export type ComponentInfoType = {
	fe_id: string
	type: string
	title: string
	props: ComponentPropsType
}

export type INIT_STATE_TYPE = {
	componentList: Array<ComponentInfoType>
}

const INIT_STATE: INIT_STATE_TYPE = {
	componentList: [],
}

export const questionSlice = createSlice({
	name: 'question',
	initialState: INIT_STATE,
	reducers: {
		// 重置所有组件
		resetComponents: (_state: INIT_STATE_TYPE, action: PayloadAction<INIT_STATE_TYPE>) =>
			action.payload,
	},
})

export const { resetComponents } = questionSlice.actions
export default questionSlice.reducer
