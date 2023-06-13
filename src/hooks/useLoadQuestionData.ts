/**
 * @description 自定义Hook - 加载问卷数据
 * @author ITSATAN
 */
import mock from '../../mock'
import { useRequest } from 'ahooks'
import { useDispatch } from 'react-redux'
import { ComponentInfoType, resetComponents } from '@/store/question'
import { resetPageInfo } from '@/store/pageInfo'

type MockDataType = {
	id: string
	title: string
	description: string
	css: undefined
	js: undefined
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
		const { title = '', description = '', css = '', js = '', componentList = [] } = data

		// 初始化选中第一个组件
		let selectedId = ''
		if (componentList.length) {
			selectedId = componentList[0].fe_id
		}

		// 重置所有组件
		dispatch(resetComponents({ componentList, selectedId, copiedComponent: null }))
		// 重置页面信息
		dispatch(resetPageInfo({ title, description, css, js }))
	}

	return {
		loading,
	}
}

export default useLoadQuestionData
