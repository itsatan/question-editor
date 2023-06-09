/**
 * @description 问卷编辑器 - 组件入口
 * @author ITSATAN
 */

import React from 'react'
import QuestionTitleConf, { QuestionTitlePropsType } from './QuestionTitle'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput'
import QuestionParagraphConf, { QuestionParagraphPropsType } from './QuestionParagraph'
import QuestionInfoConf, { QuestionInfoPropsType } from './QuestionInfo'
import QuestionTextAreaConf, { QuestionTextAreaPropsType } from './QuestionTextArea'
import QuestionRadioConf, { QuestionRadioPropsType } from './QuestionRadio'
import QuestionCheckboxConf, { QuestionCheckboxPropsType } from './QuestionCheckbox'

// 各个组件的PropsType
export type ComponentPropsType = QuestionTitlePropsType &
	QuestionInputPropsType &
	QuestionParagraphPropsType &
	QuestionInfoPropsType &
	QuestionTextAreaPropsType &
	QuestionRadioPropsType &
	QuestionCheckboxPropsType

// 组件配置的Type
export type ComponentConfType = {
	title: string
	type: string
	Component: React.FC<ComponentPropsType>
	AttributeComponent: React.FC<ComponentPropsType>
	defaultProps: ComponentPropsType
}

// 全部组件配置列表
const componentConfList: Array<ComponentConfType> = [
	QuestionTitleConf,
	QuestionInputConf,
	QuestionParagraphConf,
	QuestionInfoConf,
	QuestionTextAreaConf,
	QuestionRadioConf,
	QuestionCheckboxConf,
]

// 通过Type获取组件配置
export const getComponentConfByType = (type: string) => {
	return componentConfList.find(c => c.type === type)
}

// 组件配置分组
export const componentConfGroup = [
	{
		groupId: 'textGroup',
		groupName: '文本显示',
		components: [QuestionInfoConf, QuestionTitleConf, QuestionParagraphConf],
	},
	{
		groupId: 'inputGroup',
		groupName: '用户输入',
		components: [QuestionInputConf, QuestionTextAreaConf],
	},
	{
		groupId: 'chooseGroup',
		groupName: '用户选择',
		components: [QuestionRadioConf, QuestionCheckboxConf],
	},
]
