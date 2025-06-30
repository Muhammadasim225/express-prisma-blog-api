const prisma=require('../DB/db.config')
const createComment = async (req, res) => {
    const { post_id,user_id, comment } = req.body;
    console.log(user_id, post_id, comment);
  
    try {
      // Check if user exists
      const user = await prisma.user.findUnique({
        where: { id: Number(user_id) }
      });
      console.log("User is:",user)
      
      if (!user) {
        return res.status(400).json({ status: 400, message: 'User not found' });
      }
      
      // Check if post exists
      const post = await prisma.post.findUnique({
        where: { id: post_id }
      });
      console.log("Post is:",post)

      
      if (!post) {
        return res.status(400).json({ status: 400, message: 'Post not found' });
      }
      await prisma.post.update({
        where:{
            id:post_id
        },
        data:{
            comment_count:{
                increment:1
            }
        }
      })
  
      // Create post
      const insertComment = await prisma.comment.create({
        data: {
          user_id: Number(user_id),
          post_id,
          comment
        }
      });
  
      return res.status(201).json({
        data: insertComment,
        message: "Comment created successfully"
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error try again" });
    }
  };
  
const updateComment=async(req,res)=>{
    const {id}=req.params
    const {comment}=req.body;
    try{

        
        const findCommentAndUpdate=await prisma.comment.update({
            where:{
                id:id,
            },
            data:{
                comment
            }

        })
        console.log(findCommentAndUpdate)
        
            res.status(200).json({message:"Comment updated successfully", data: findCommentAndUpdate})
    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }

}
const fetchComment=async(req,res)=>{
    try{
        const fetcherComment=await prisma.comment.findMany({
            include:{
                post:{
                    select:{
                        title:true,
                        description:true,
                        comment_count:true
                    },
                },
                user:{
                    select:{
                        name:true
                    }
                }
            }
        })
        return res.status(200).json({message:"Comment fetched successfully",data:fetcherComment})
    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }
}
const fetchOneComment=async(req,res)=>{
    const id=req.params.id;
    try{
        const fetchOnly=await prisma.comment.findFirst({
            where:{
                id:id
            }
        })
        res.status(200).send({message:`Comment-${id} fetched successfully`,data:fetchOnly})
    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }
}
const deleteComment=async(req,res)=>{
    const id=req.params.id
    try{
    
        const findAndDelete=await prisma.comment.delete({
            where:{
                id:id
            }
        })
        console.log(findAndDelete);
        await prisma.post.update({
            where:{
                id:findAndDelete.post_id
            },
            data:{
                comment_count:{
                    decrement:1,   
                }
            }
          })
    
        res.status(200).send({message:`Comment-${id} deleted successfully`,data:findAndDelete})

    }
    catch(err){
        res.status(500).json({message:"Error try again"})
    }
}



module.exports={createComment,updateComment,fetchComment,fetchOneComment,deleteComment}