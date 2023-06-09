import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '@/components'
import {
	getCurrentSelectedComponent,
	getCurrentSelectedComponentIndex,
	getNextSelectedId,
} from './utils'

export type ComponentInfoType = {
	fe_id: string
	type: string
	title: string
	isHidden?: boolean
	isLocked?: boolean
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
			const { selectedId, componentList } = state
			const newComponent = action.payload
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
		// 删除选中组件
		deleteSelectedComponent: (state: INIT_STATE_TYPE) => {
			const { selectedId, componentList } = state
			const currentComponent = getCurrentSelectedComponentIndex(componentList, selectedId)
			// 重新计算 selectedId
			state.selectedId = getNextSelectedId(selectedId, componentList)
			// 删除组件
			state.componentList.splice(currentComponent, 1)
		},
		// 隐藏/显示 选中组件
		changeComponentHidden: (
			state: INIT_STATE_TYPE,
			action: PayloadAction<{ fe_id: string; isHidden: boolean }>
		) => {
			const { componentList } = state
			const { fe_id, isHidden } = action.payload
			// 重新计算 selectedId
			let newSelectedId = ''
			if (isHidden) {
				// 隐藏组件
				newSelectedId = getNextSelectedId(fe_id, componentList)
			} else {
				// 显示组件
				newSelectedId = fe_id
			}
			state.selectedId = newSelectedId
			const currentComponent = getCurrentSelectedComponent(componentList, fe_id)
			if (currentComponent) {
				currentComponent.isHidden = isHidden
			}
		},
		// 锁定/解锁 选中组件
		toggleComponentLocked: (state: INIT_STATE_TYPE, action: PayloadAction<{ fe_id: string }>) => {
			const { componentList } = state
			const { fe_id } = action.payload
			const currentComponent = getCurrentSelectedComponent(componentList, fe_id)
			if (currentComponent) {
				currentComponent.isLocked = !currentComponent.isLocked
			}
		},
	},
})

export const {
	resetComponents,
	changeSelectedId,
	addComponent,
	changeComponentProps,
	deleteSelectedComponent,
	changeComponentHidden,
	toggleComponentLocked,
} = questionSlice.actions
export default questionSlice.reducer
