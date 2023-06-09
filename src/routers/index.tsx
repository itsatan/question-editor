import { createBrowserRouter } from 'react-router-dom'
import Home from '@/page/Home'
import Editor from '@/page/Editor'
import NotFound from '@/page/NotFound'

export const HOME_PATH = '/'
export const EDITOR_PATH = '/editor'
export const NOTFOUND_PATH = '*'

const router = createBrowserRouter([
	{
		path: HOME_PATH,
		element: <Home />,
	},
	{
		path: EDITOR_PATH,
		element: <Editor />,
	},
	{
		path: NOTFOUND_PATH,
		element: <NotFound />,
	},
])

export default router
