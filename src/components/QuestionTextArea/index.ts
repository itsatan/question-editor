/**
 * @description 问卷编辑器 - TextArea组件入口
 * @author ITSATAN
 */

import Component from './Component'
import AttributeComponent from './AttributeComponent'
import { QuestionTextAreaDefaultProps } from './interface'

export * from './interface'

// TextArea组件配置
export default {
	title: '多行输入标题',
	type: 'QuestionTextArea',
	Component,
	AttributeComponent,
	defaultProps: QuestionTextAreaDefaultProps,
}
