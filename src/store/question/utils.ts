import { ComponentInfoType, INIT_STATE_TYPE } from '.'

/**
 * 获取当前选中组件的index
 */
export const getCurrentSelectedComponentIndex = (
	componentList: Array<ComponentInfoType>,
	selectedId: string
) => {
	return componentList.findIndex(c => c.fe_id === selectedId)
}

/**
 * 获取当前选中组件
 */
export const getCurrentSelectedComponent = (
	componentList: Array<ComponentInfoType>,
	selectedId: string
) => {
	return componentList.find(c => c.fe_id === selectedId)
}

/**
 * 获取下一个selectedId
 */
export const getNextSelectedId = (fe_id: string, componentList: Array<ComponentInfoType>) => {
	// 过滤隐藏组件
	const visibleComponentList = componentList.filter(c => !c.isHidden)
	// 获取当前选中组件的index
	const index = getCurrentSelectedComponentIndex(visibleComponentList, fe_id)
	// （异常情况）如果未找到
	if (index < 0) return ''
	// 重新计算selectedId
	let newSelectedId = ''
	const length = visibleComponentList.length
	if (length <= 1) {
		// 只有一个组件，删了就没有了
		newSelectedId = ''
	} else {
		// 组件至少有两个
		if (index + 1 === length) {
			// 删除最后一个
			newSelectedId = visibleComponentList[index - 1].fe_id
		} else {
			// 不是最后一个
			newSelectedId = visibleComponentList[index + 1].fe_id
		}
	}
	return newSelectedId
}

/**
 * 插入新组件
 */
export const insertNewComponent = (state: INIT_STATE_TYPE, newComponent: ComponentInfoType) => {
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
}
