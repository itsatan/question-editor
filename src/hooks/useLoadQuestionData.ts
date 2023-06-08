/**
 * @description 自定义Hook - 加载问卷数据
 * @author ITSATAN
 */
import mock from '../../mock'
import { useRequest } from 'ahooks'
import { useDispatch } from 'react-redux'
import { ComponentInfoType, resetComponents } from '@/store/question'

type MockDataType = {
	id: string
	title: string
	componentList: Array<ComponentInfoType>
}

function getQuestionData(): Promise<MockDataType> {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(mock as MockDataType)
		}, 1000)
	})
}

const useLoadQuestionData = () => {
	const dispatch = useDispatch()
	const { data, loading } = useRequest(getQuestionData)

	if (data) {
		const { componentList = [] } = data

		// 初始化选中第一个组件
		let selectedId = ''
		if (componentList.length) {
			selectedId = componentList[0].fe_id
		}

		dispatch(resetComponents({ componentList, selectedId }))
	}

	return {
		loading,
	}
}

export default useLoadQuestionData
