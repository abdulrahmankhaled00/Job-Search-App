process.on('uncaughtException',(err)=>{
    console.log(err);
})

import express from 'express'
import AppError from './src/utils/AppError.js';
import dotenv from 'dotenv'
import dbConnection from './database/dbConnection.js';
import globalError from './src/middleware/globalError.js';
import userRouter from './src/modules/user/user.routes.js';
import companyRouter from './src/modules/company/company.routes.js';
import jobRouter from './src/modules/job/job.routes.js';
import appCollectionRouter from './src/modules/appCollection/appCollection.routes.js';



dbConnection()
dotenv.config()
const app = express()
const port = 3000


app.use(express.json())


app.use(userRouter)
app.use(appCollectionRouter)
app.use(companyRouter)
app.use(jobRouter)


app.get('/', (req, res) => res.send('Hello World!'))
app.use('*',(req,res,next)=>{
    next(new AppError('this endpoint not existed',404))
})


app.use(globalError)
process.on('unhandledRejection',(err)=>{
    console.log(err);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))