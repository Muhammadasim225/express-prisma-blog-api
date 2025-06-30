const prisma=require('../DB/db.config')
const createPost = async (req, res) => {
    const { user_id, title, description } = req.body;
    console.log(user_id, title, description);
  
    try {
      // Check if user exists
      const findUser = await prisma.user.findUnique({
        where: {
          id: Number(user_id)
        }
      });
  
      if (!findUser) {
        return res.status(400).json({ status: 400, message: 'User not found' });
      }
  
      // Create post
      const insertPost = await prisma.post.create({
        data: {
          user_id: Number(user_id),
          title,
          description
        }
      });
  
      return res.status(201).json({
        data: insertPost,
        message: "Post created successfully"
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error try again" });
    }
  };
  
const updatePost=async(req,res)=>{
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
const fetchPost=async(req,res)=>{
    try{
        const fetcherPost=await prisma.post.findMany({
            skip: 2,
            take: 1,
          })

            return res.status(200).json({message:"Post fetched successfully",data:fetcherPost})
    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }
}
const fetchOnePost=async(req,res)=>{
    const id=req.params.id;
    try{
        const fetchOnly=await prisma.post.findFirst({
            where:{
                id:id
            }
        })
        res.status(200).send({message:`Post-${id} fetched successfully`,data:fetchOnly})
    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }
}
const deletePost=async(req,res)=>{
    const postId=req.params.id
    try{
        const findAndDelete=await prisma.post.delete({
            where:{
                id:Number(postId)
            }
        })
        res.status(200).send({message:`Post-${postId} deleted successfully`,data:findAndDelete})

    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }
}
const searchPost=async(req,res)=>{
    const query=req.query.q;

    try{
        const posts=await prisma.post.findMany({
            where:{
                description:{
                    search:query
                }
                
            }
        })
        return res.status(200).json({message:"Query successfully",data:posts})

    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }
    
}


module.exports={searchPost,createPost,updatePost,fetchPost,fetchOnePost,deletePost}