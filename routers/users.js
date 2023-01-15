const express=require('express');
const user = require('../models/user');
const router=express.Router();
const User=require('../models/user')



router.get('/getAll',async(req,res)=>{
    try{
        const users=await User.find();
        res.json(users);
       
    }catch(error){

        res.send('error occurre'+ error)
    }
})

router.get('/get/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        res.json(user);
       
    }catch(error){

        res.send('error occurre'+ error)
    }
})



router.post('/UserCreate', async(req,res) => {
    const user = new User({
        UserName: req.body.UserName,
        email: req.body.email,
        password: req.body.password,
        confirmPassword:req.body.confirmPassword,
        mobile:req.body.mobile,
        referalCode:req.body.referalCode,
    })
 
    try{
        const users =  await user.save() 
        res.json(users)
        
    }catch(err){
        res.send('Error'+err)
    }
})


router.patch('/update/:id',async(req,res)=>{
    try{
       const userUpdate=await User.findById(req.params.id);
       userUpdate.mobile=req.body.mobile;
       const user=await userUpdate.save();
           res.json(user);
    }catch(err)
    {
        res.send('Error'+err);
    }
})


router.delete('/delete/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        const deleteUser=user.delete();
        res.json('delete user Successgully');
    }catch(error){

        res.send('error occurre'+ error)
    }
})



module.exports=router;