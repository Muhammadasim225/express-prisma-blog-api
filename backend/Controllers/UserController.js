const prisma=require('../DB/db.config')

const createUser=async(req,res)=>{
    const {name,email,password}=req.body
    try{
        const findUser=await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if(findUser){
            res.status(400).json({status:400,message:'Email already taken'})
        }
        const newUser = await prisma.user.create({  // 'user' is not defined, should be 'prisma.user.create'
            data: { name, email, password }
          });
        return res.json({data:newUser,status:400,msg:"User created successfully"})
    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }

}
const updateUser=async(req,res)=>{
    const {id}=req.params
    const {name,email,password}=req.body;
    try{
        const findUserAndUpdate=await prisma.user.update({
            where:{
                id:Number(id)
            },
            data:{
                name,
                email,
                password
            }

        })
        console.log(findUserAndUpdate)
        
            res.status(200).json({message:"User updated successfully", data: findUserAndUpdate})
    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }

}
const fetchUser=async(req,res)=>{
    try{
        const fetcherUser=await prisma.user.findMany({})
        return res.status(200).json({message:"User fetched successfully",data:fetcherUser})
    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }
}
const fetchOne=async(req,res)=>{
    const userId=req.params.id
    try{
        const fetchOnly=await prisma.user.findFirst({
            where:{
                id:Number(userId)
            }
        })
        res.status(200).send({message:`User-${userId} fetched successfully`,data:fetchOnly})
    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }
}
const deleteUser=async(req,res)=>{
    const userId=req.params.id
    try{
        const findAndDelete=await prisma.user.delete({
            where:{
                id:Number(userId)
            }
        })
        res.status(200).send({message:`User-${userId} deleted successfully`,data:findAndDelete})

    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }
}


module.exports={createUser,updateUser,fetchUser,fetchOne,deleteUser}