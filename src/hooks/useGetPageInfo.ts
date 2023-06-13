/**
 * @description 自定义Hook - 获取页面信息
 * @author ITSATAN
 */

import { useSelector } from 'react-redux'
import type { STATE_TYPE } from '@/store'

const useGetPageInfo = () => {
	const pageInfo = useSelector((state: STATE_TYPE) => state.pageInfo)

	return pageInfo
}

export default useGetPageInfo
