import QuestionInputComponent from '@/components/QuestionInput/Component'
import QuestionTitleComponent from '@/components/QuestionTitle/Component'
import React from 'react'
import styles from './EditorCanvas.module.scss'

const EditorCanvas: React.FC = () => {
	return (
		<div className={styles['editor-canvas']}>
			<div className={styles['editor-component-wrapper']}>
				<div className={styles['editor-component']}>
					<QuestionTitleComponent />
				</div>
			</div>
			<div className={styles['editor-component-wrapper']}>
				<div className={styles['editor-component']}>
					<QuestionInputComponent />
				</div>
			</div>
		</div>
	)
}

export default EditorCanvas
