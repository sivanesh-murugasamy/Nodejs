const express=require('express')
const router=express.Router()
const userController=require('../Controller/userController')

router.get('/users',userController.getAllUsers)

module.exports=router
















