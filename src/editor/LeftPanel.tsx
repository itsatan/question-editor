import React from 'react'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import ComponentLib from './componentLib'

const LeftPanel: React.FC = () => {
	const tabsItem = [
		{
			key: 'componentLib',
			label: (
				<span>
					<AppstoreOutlined />
					组件库
				</span>
			),
			children: <ComponentLib />,
		},
		{
			key: 'layers',
			label: (
				<span>
					<BarsOutlined />
					图层
				</span>
			),
			children: <div>图层</div>,
		},
	]

	return <Tabs defaultActiveKey="componentLib" items={tabsItem} />
}

export default LeftPanel
