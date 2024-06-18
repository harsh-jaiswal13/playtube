const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler()).catch((err)=>next(err))
    }
}

export {asyncHandler}


// const asyncHandler=(fn)=> asyncHandler(req,res,next)=>{
//     try{

//     }catch(error){
//         res.status(err.code || 500).json({
//             succes :false,
//             message:err.message
//         })
//     }

// }