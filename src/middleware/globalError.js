

const globalError=(err,req,res,next)=>{
    err.statusCode=err.statusCode ||500
    if(process.env.MODE=="DEV"){
        res.status(err.statusCode).json({erorr:err.message,at:err.stack})
    }else{
        res.status(err.statusCode).json({erorr:err.message})
    }
}

export default globalError