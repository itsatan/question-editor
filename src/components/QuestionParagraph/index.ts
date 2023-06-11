/**
 * @description 问卷编辑器 - Paragraph组件入口
 * @author ITSATAN
 */

import Component from './Component'
import AttributeComponent from './AttributeComponent'
import { QuestionParagraphDefaultProps } from './interface'

export * from './interface'

// Paragraph组件配置
export default {
	title: '段落',
	type: 'QuestionParagraph',
	Component,
	AttributeComponent,
	defaultProps: QuestionParagraphDefaultProps,
}
