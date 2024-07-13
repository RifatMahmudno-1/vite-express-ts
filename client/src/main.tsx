import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/css/global.css'
import App from '@/app'

createRoot(document.getElementById('root') as HTMLDivElement).render(
	<StrictMode>
		<App />
	</StrictMode>
)
