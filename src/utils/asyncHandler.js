//Promise Method
const asyncHandler = (requestHandler)=>{
(req,res,next)=>{
Promise.resolve(requestHandler(req,res,next))
.catch(error=>next(error))
}
}

// Try Catch Method 
// const asyncHandler1 = (fn) => async(req,res,next)=>{
//     try{
//         await fn(req,res,next);
//     }catch(error){
//     res.status(error.code || 500).json({
//         success:false,
//         message:error.message || "Internal Server Error"
//     })  
//     }
// }

export default asyncHandler;