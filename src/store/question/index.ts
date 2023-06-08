import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '@/components'

export type ComponentInfoType = {
	fe_id: string
	type: string
	title: string
	props: ComponentPropsType
}

export type INIT_STATE_TYPE = {
	selectedId: string
	componentList: Array<ComponentInfoType>
}

const INIT_STATE: INIT_STATE_TYPE = {
	selectedId: '',
	componentList: [],
}

// 获取当前选中组件的index
const getCurrentSelectedComponentIndex = (
	componentList: Array<ComponentInfoType>,
	selectedId: string
) => {
	return componentList.findIndex(c => c.fe_id === selectedId)
}

// 获取当前选中组件
const getCurrentSelectedComponent = (
	componentList: Array<ComponentInfoType>,
	selectedId: string
) => {
	return componentList.find(c => c.fe_id === selectedId)
}

export const questionSlice = createSlice({
	name: 'question',
	initialState: INIT_STATE,
	reducers: {
		// 重置所有组件
		resetComponents: (_state: INIT_STATE_TYPE, action: PayloadAction<INIT_STATE_TYPE>) =>
			action.payload,
		// 修改selectedId
		changeSelectedId: (state: INIT_STATE_TYPE, action: PayloadAction<string>) => {
			state.selectedId = action.payload
		},
		// 添加新组件
		addComponent: (state: INIT_STATE_TYPE, action: PayloadAction<ComponentInfoType>) => {
			const newComponent = action.payload

			const { selectedId, componentList } = state
			const index = getCurrentSelectedComponentIndex(componentList, selectedId)

			if (index < 0) {
				// 未选中任何组件
				state.componentList.push(newComponent)
			} else {
				// 选中了组件,插入到 index 后面
				state.componentList.splice(index + 1, 0, newComponent)
			}

			// 选中新组件
			state.selectedId = newComponent.fe_id
		},
		// 修改组件属性
		changeComponentProps: (
			state: INIT_STATE_TYPE,
			action: PayloadAction<{ fe_id: string; newProps: ComponentPropsType }>
		) => {
			const { componentList } = state
			const { fe_id, newProps } = action.payload

			const currentComponent = getCurrentSelectedComponent(componentList, fe_id)
			if (currentComponent === undefined) return
			currentComponent.props = {
				...currentComponent.props,
				...newProps,
			}
		},
	},
})

export const { resetComponents, changeSelectedId, addComponent, changeComponentProps } =
	questionSlice.actions
export default questionSlice.reducer
