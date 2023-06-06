import React from 'react'
import styles from './index.module.scss'
import EditorCanvas from './EditorCanvas'

const Editor: React.FC = () => {
	return (
		<div className={styles['editor-container']}>
			<div>Header</div>
			<div className={styles['editor-content-wrapper']}>
				<div className={styles['editor-content']}>
					<div className={styles['editor-left']}>Left</div>
					<div className={styles['editor-main']}>
						<div className={styles['editor-canvas-wrapper']}>
							<EditorCanvas />
						</div>
					</div>
					<div className={styles['editor-right']}>Right</div>
				</div>
			</div>
		</div>
	)
}

export default Editor
