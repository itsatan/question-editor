import React from 'react'
import styles from './index.module.scss'
import { useDispatch } from 'react-redux'
import { changeSelectedId } from '@/store/question'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import LeftPanel from './LeftPanel'
import EditorCanvas from './EditorCanvas'
import RightPanel from './RightPanel'

const Editor: React.FC = () => {
	const { loading } = useLoadQuestionData()
	const dispatch = useDispatch()
	// 点击背景清除选中状态
	const clearSelectedId = () => {
		dispatch(changeSelectedId(''))
	}
	return (
		<div className={styles['editor-container']}>
			<div>Header</div>
			<div className={styles['editor-content-wrapper']}>
				<div className={styles['editor-content']}>
					<div className={styles['editor-left']}>
						<LeftPanel />
					</div>
					<div className={styles['editor-main']} onClick={clearSelectedId}>
						<div className={styles['editor-canvas-wrapper']}>
							<EditorCanvas loading={loading} />
						</div>
					</div>
					<div className={styles['editor-right']}>
						<RightPanel />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Editor
