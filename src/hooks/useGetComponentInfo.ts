/**
 * @description 自定义Hook - 获取组件列表
 * @author ITSATAN
 */
import { useSelector } from 'react-redux'
import { STATE_TYPE } from '@/store'

const useGetComponentInfo = () => {
	const question = useSelector((state: STATE_TYPE) => state.question)

	const { selectedId = '', componentList = [] } = question

	const selectedComponent = componentList.find(c => c.fe_id === selectedId)

	return {
		selectedId,
		componentList,
		selectedComponent,
	}
}

export default useGetComponentInfo
