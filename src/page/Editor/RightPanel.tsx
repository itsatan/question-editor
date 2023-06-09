import React from 'react'
import { Tabs } from 'antd'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import ComponentAttribute from './ComponentAttribute'

const RightPanel: React.FC = () => {
	const tabsItems = [
		{
			key: 'attribute',
			label: (
				<span>
					<FileTextOutlined />
					属性
				</span>
			),
			children: <ComponentAttribute />,
		},
		{
			key: 'setting',
			label: (
				<span>
					<SettingOutlined />
					页面设置
				</span>
			),
			children: <div>页面设置</div>,
		},
	]

	return <Tabs defaultActiveKey="attribute" items={tabsItems} />
}

export default RightPanel
