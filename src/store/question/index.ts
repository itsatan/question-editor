import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import cloneDeep from 'lodash.clonedeep'
import { ComponentPropsType } from '@/components'
import {
	getCurrentSelectedComponent,
	getCurrentSelectedComponentIndex,
	getNextSelectedId,
	insertNewComponent,
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
	copiedComponent: ComponentInfoType | null
}

const INIT_STATE: INIT_STATE_TYPE = {
	selectedId: '',
	componentList: [],
	copiedComponent: null,
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
			insertNewComponent(state, newComponent)
		},
		// 修改组件属性
		changeComponentProps: (
			state: INIT_STATE_TYPE,
			action: PayloadAction<{ fe_id: string; newProps: ComponentPropsType }>
		) => {
			const { componentList } = state
			const { fe_id, newProps } = action.payload
			const currentComponent = getCurrentSelectedComponent(componentList, fe_id)
			if (!currentComponent) return
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
			if (!currentComponent) return
			currentComponent.isHidden = isHidden
		},
		// 锁定/解锁 选中组件
		toggleComponentLocked: (state: INIT_STATE_TYPE, action: PayloadAction<{ fe_id: string }>) => {
			const { componentList } = state
			const { fe_id } = action.payload
			const currentComponent = getCurrentSelectedComponent(componentList, fe_id)
			if (!currentComponent) return
			currentComponent.isLocked = !currentComponent.isLocked
		},
		// 拷贝当前选中的组件
		copyCurrentSelectedComponent: (state: INIT_STATE_TYPE) => {
			const { selectedId, componentList } = state
			const currentComponent = getCurrentSelectedComponent(componentList, selectedId)
			if (!currentComponent) return
			// 深拷贝数据
			state.copiedComponent = cloneDeep(currentComponent)
		},
		// 粘贴组件
		pasteCopiedComponent: (state: INIT_STATE_TYPE) => {
			const { copiedComponent } = state
			if (!copiedComponent) return
			// 注意：此处必须修改id，保证唯一性
			copiedComponent.fe_id = nanoid()
			insertNewComponent(state, copiedComponent)
		},
		// 选中上一个
		selectPrevComponent: (state: INIT_STATE_TYPE) => {
			const { selectedId, componentList } = state
			const selectedIndex = getCurrentSelectedComponentIndex(componentList, selectedId)
			//未选中组件 或 选中了第一个 无法向上选择
			if (selectedIndex <= 0) return
			state.selectedId = componentList[selectedIndex - 1].fe_id
		},
		// 选中下一个
		selectNextComponent: (state: INIT_STATE_TYPE) => {
			const { selectedId, componentList } = state
			const selectedIndex = getCurrentSelectedComponentIndex(componentList, selectedId)
			// 未选中组件
			if (selectedIndex < 0) return
			const length = componentList.length
			// 选中了最后一个 无法向下选择
			if (selectedIndex + 1 === length) return
			state.selectedId = componentList[selectedIndex + 1].fe_id
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
	copyCurrentSelectedComponent,
	pasteCopiedComponent,
	selectPrevComponent,
	selectNextComponent,
} = questionSlice.actions
export default questionSlice.reducer
