/**
 * @description 自定义Hook - 获取组件列表
 * @author ITSATAN
 */
import { useSelector } from 'react-redux'
import type { STATE_TYPE } from '@/store'

const useGetComponentInfo = () => {
	const question = useSelector((state: STATE_TYPE) => state.question)

	const { selectedId = '', componentList = [], copiedComponent } = question

	const selectedComponent = componentList.find(c => c.fe_id === selectedId)

	return {
		selectedId,
		componentList,
		selectedComponent,
		copiedComponent,
	}
}

export default useGetComponentInfo
