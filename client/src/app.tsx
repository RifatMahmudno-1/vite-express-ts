import { Suspense } from 'react'

function App() {
	return (
		<Suspense fallback="Loading...">
			<h1 className="bg-amber-300 text-lg">Hi there!</h1>
			<p>
				Clone this project from &nbsp;
				<a href="https://github.com/RifatMahmudno-1/vite-express-ts" target="_blank">
					https://github.com/RifatMahmudno-1/vite-express-ts
				</a>
			</p>
		</Suspense>
	)
}

export default App
