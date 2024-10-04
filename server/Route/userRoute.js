const express=require('express')
const router=express.Router()
const userController=require('../Controller/userController')

router.get('/users',userController.getAllUsers)
router.post('/users',userController.createUser)
router.delete('/users/:id',userController.deleteUser)
router.put('/users/:id',userController.updateUser)
router.get('/users/:id',userController.FindUser)
router.all('/users',userController.findAll)
module.exports=router
















