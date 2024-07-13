import express from 'express'
import dotenv from 'dotenv'
import setupVite from './utils/setupVite.js'

dotenv.config({ path: '../.env' })
const app = express()

// will handle all get requests. Call it in the end
await setupVite(app)

if (process.env.Serverless !== 'YES') {
	if (!process.env.PORT) throw Error('PORT not specified')
	app.listen({ port: Number(process.env.PORT) })
	if (process.argv.includes('--dev')) console.log(`Server is running on http://localhost:${process.env.PORT}`)
	else console.log('Server started')
}
export default app
