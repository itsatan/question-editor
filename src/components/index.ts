/**
 * @description 问卷编辑器 - 组件入口
 * @author ITSATAN
 */

import React from 'react'
import QuestionTitleConf, { QuestionTitlePropsType } from './QuestionTitle'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput'

// 各个组件的PropsType
export type ComponentPropsType = QuestionTitlePropsType & QuestionInputPropsType

// 组件配置的Type
export type ComponentConfType = {
	title: string
	type: string
	Component: React.FC<ComponentPropsType>
	defaultProps: ComponentPropsType
}

// 全部组件配置列表
const componentConfList: Array<ComponentConfType> = [QuestionTitleConf, QuestionInputConf]

// 通过Type获取组件配置
export const getComponentConfByType = (type: string) => {
	return componentConfList.find(c => c.type === type)
}
