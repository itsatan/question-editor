/**
 * @description 自定义Hook - 加载问卷数据
 * @author ITSATAN
 */
import mock from '../../mock'
import { useRequest } from 'ahooks'
import { useDispatch } from 'react-redux'
import { resetComponents } from '@/store/question'

function getQuestionData(): Promise<any> {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(mock)
		}, 1000)
	})
}

const useLoadQuestionData = () => {
	const dispatch = useDispatch()
	const { data, loading } = useRequest(getQuestionData)

	if (data) {
		const { componentList = [] } = data
		dispatch(resetComponents({ componentList }))
	}

	return {
		loading,
	}
}

export default useLoadQuestionData
