# Serverless

1. api directory is only required for serverless
2. If running on serverless set environment variable Serverless=YES
3. api/index.js depends on compiled js. So, you must run npm run build or for server only npm run build:server before running serverless
4. vercel.json is config file for deploying in vercel
5. Serverless was added to work with vercel. Will work with others with some small modifications.

# About

1. This project has completely independent client and server
