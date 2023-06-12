import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import ComponentAttribute from './ComponentAttribute'
import PageSetting from './PageSetting'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'

// TAB枚举
const enum TAB_KEY {
	ATTRIBUTE_KEY = 'attribute',
	SETTING_KEY = 'setting',
}

const RightPanel: React.FC = () => {
	const { selectedId } = useGetComponentInfo()
	const [activeKey, setActiveKey] = useState(TAB_KEY.ATTRIBUTE_KEY)
	// 监测selectedId 动态控制Tabs
	useEffect(() => {
		if (selectedId) setActiveKey(TAB_KEY.ATTRIBUTE_KEY)
		else setActiveKey(TAB_KEY.SETTING_KEY)
	}, [selectedId])

	const tabsItems = [
		{
			key: TAB_KEY.ATTRIBUTE_KEY,
			label: (
				<span>
					<FileTextOutlined />
					属性
				</span>
			),
			children: <ComponentAttribute />,
		},
		{
			key: TAB_KEY.SETTING_KEY,
			label: (
				<span>
					<SettingOutlined />
					页面设置
				</span>
			),
			children: <PageSetting />,
		},
	]

	return (
		<Tabs
			activeKey={activeKey}
			onChange={key => setActiveKey(key as TAB_KEY.ATTRIBUTE_KEY | TAB_KEY.SETTING_KEY)}
			items={tabsItems}
		/>
	)
}

export default RightPanel
