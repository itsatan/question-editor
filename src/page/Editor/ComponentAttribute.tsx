import React from 'react'
import { ComponentPropsType, getComponentConfByType } from '@/components'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { useDispatch } from 'react-redux'
import { changeComponentProps } from '@/store/question'

const NotFound: React.FC = () => {
	return <div style={{ textAlign: 'center', marginTop: 50 }}>未选中任何组件</div>
}

const ComponentAttribute: React.FC = () => {
	const dispatch = useDispatch()
	const { selectedComponent } = useGetComponentInfo()
	if (selectedComponent === undefined) return <NotFound />
	const { type, props, isHidden, isLocked } = selectedComponent
	const componentConf = getComponentConfByType(type)
	if (componentConf === undefined) return <NotFound />
	const { AttributeComponent } = componentConf

	// 同步数据到Redux
	const changeProps = (newProps: ComponentPropsType) => {
		const { fe_id } = selectedComponent
		dispatch(changeComponentProps({ fe_id, newProps }))
	}

	return <AttributeComponent {...props} onChange={changeProps} disabled={isLocked || isHidden} />
}

export default ComponentAttribute
