const express=require('express')
const app =express()
const dotEnv=require('dotenv')
const path =require('path')
const mongoose=require('mongoose')
const cors=require('cors')


// configure cors
app.use(cors());


// configure of middlvare && configure express to receive form data
app.use(express.json())


// configure of .env
dotEnv.config({path:'./.env'})


// processing host and port
var hostname=process.env.HOST_NAME || "localhost"
var port =process.env.PORT ||5000    


// connect mongoose data base to server
mongoose.connect(process.env.MONGO_DB_LOCAL_URL).then((response)=>{

console.log('data base has been successfully connected')

}).catch((error)=>{

    console.error('data base is not connected',error);

    process.exit(1);

})



// simple request
app.get('/',(request,respone)=>{

    respone.send('welcome to express ')

})


// conncetion of our api
app.use('/api',require('./Router/ProductRouter'))


app.listen(port,hostname,()=>{

    console.log(`Express  server is Started at http://${hostname}:${port}/`)
})



