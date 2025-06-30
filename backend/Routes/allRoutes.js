const express=require('express');
const router=express.Router();
const {createUser,updateUser,fetchUser,fetchOne,deleteUser}=require('../Controllers/UserController')
const {createPost,searchPost,updatePost,fetchPost,fetchOnePost,deletePost}=require('../Controllers/PostController')
const {createComment,updateComment,fetchComment,fetchOneComment,deleteComment}=require('../Controllers/CommentController')
// User Routes
router.post('/create-user',createUser)
router.put('/update-user/:id',updateUser)
router.get('/fetch-user',fetchUser)
router.get('/fetch-one-user/:id',fetchOne)
router.delete('/delete-one-user/:id',deleteUser)

// Post Routes
router.post('/create-post',createPost)
router.put('/update-post/:id',updatePost)
router.get('/search',searchPost)
router.get('/fetch-post',fetchPost)
router.get('/fetch-one-post/:id',fetchOnePost)
router.delete('/delete-one-post/:id',deletePost)

// Comment Routes
router.post('/create-comment',createComment)
router.put('/update-comment/:id',updateComment)
router.get('/fetch-comment',fetchComment)
router.get('/fetch-one-comment/:id',fetchOneComment)
router.delete('/delete-one-comment/:id',deleteComment)

module.exports=router