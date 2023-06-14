/**
 * @description 自定义Hook - 绑定键盘事件
 * @author ITSATAN
 */
import { useKeyPress } from 'ahooks'
import { useDispatch } from 'react-redux'
import {
	copyCurrentSelectedComponent,
	deleteSelectedComponent,
	pasteCopiedComponent,
	selectNextComponent,
	selectPrevComponent,
} from '@/store/question'
import useGetComponentInfo from './useGetComponentInfo'
import { message } from 'antd'

// 判断光标点击是否符合预期
const isActiveElementValid = () => {
	const activeElem = document.activeElement
	// 此判断说明没有focus到Input
	// 没有增加 dnd-kit
	// if (activeElem === document.body) return true

	// 增加了 dnd-kit
	if (activeElem === document.body) return true
	// 如果元素被指定的选择器字符串选择，Element.matches() 方法返回 true; 否则返回 false。
	if (activeElem?.matches('div[role="button"]')) {
		return true
	}

	return false
}

const useBindCanvasKeyPress = () => {
	const dispatch = useDispatch()
	const { selectedId, selectedComponent } = useGetComponentInfo()
	// 删除
	useKeyPress(['backspace', 'delete'], () => {
		if (!isActiveElementValid() || !selectedId) return
		if (!selectedComponent) return
		if (selectedComponent.isLocked) return message.warning('已锁定组件不可删除，请先解锁组件')
		dispatch(deleteSelectedComponent())
	})
	// 复制
	useKeyPress(['ctrl.c', 'meta.c'], () => {
		if (!isActiveElementValid() || !selectedId) return
		dispatch(copyCurrentSelectedComponent())
	})
	// 粘贴
	useKeyPress(['ctrl.v', 'meta.v'], () => {
		if (!isActiveElementValid()) return
		dispatch(pasteCopiedComponent())
	})
	// 选中上一个
	useKeyPress('uparrow', () => {
		if (!isActiveElementValid()) return
		dispatch(selectPrevComponent())
	})
	// 选中下一个
	useKeyPress('downarrow', () => {
		if (!isActiveElementValid()) return
		dispatch(selectNextComponent())
	})
}

export default useBindCanvasKeyPress
