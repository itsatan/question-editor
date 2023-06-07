/**
 * @description 自定义Hook - 获取组件列表
 * @author ITSATAN
 */
import { useSelector } from 'react-redux'
import { STATE_TYPE } from '@/store'

const useGetComponentInfo = () => {
	const question = useSelector((state: STATE_TYPE) => state.question)

	const { componentList = [] } = question

	return {
		componentList,
	}
}

export default useGetComponentInfo
