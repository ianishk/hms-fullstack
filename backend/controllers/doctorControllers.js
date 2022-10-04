const express=require('express');
const { check, validationResult } = require('express-validator');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('config');
const auth=require('../middleware/auth');

const Doctor=require('../models/doctor');

router.post('/signup',
    check('name','name is required').not().isEmpty(),
    check('email','email is required').isEmail(),
    check('password','password is required').notEmpty(),
    check('age','age is required').notEmpty(),
    check('phone','phone is required').notEmpty(),
    check('address','address is required').notEmpty(),
    async (req,res)=>{
        errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        const {name,email,password,age,phone,address}=req.body;

        try {
            let doctor=await Doctor.findOne({email});
            if(doctor){
                return res.status(400).json({error:[{msg:'User is already taken'}]});
            }
            doctor=new Doctor({name,email,password,age,phone,address});
            //encrypting password
            const salt=await bcrypt.genSalt(10);
            doctor.password=await bcrypt.hash(password,salt);
            await doctor.save();
            //return json web token
            const payload={
                user:{
                    id:doctor.id
                }
            };

            jwt.sign(payload,config.get('jwttoken'),{expiresIn:3600},(err,token)=>{
                if(err)throw err;
                res.json({token});
            });
        } catch (error) {
            console.log(error.message);
        }
    });

router.post('/login',
    check('email','email is required').isEmail(),
    check('password','password is required').notEmpty(),
    async(req,res)=>{
        errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        const {email,password}=req.body;
        try {
            const doctor=await Doctor.findOne({email});
            if(!doctor){
                return res.status(400).json({error:[{msg:'Invalid credentials'}]});
            }
            
            const isMatch=await bcrypt.compare(password,doctor.password);
            if(!isMatch)return res.status(400).json({error:[{msg:'Invalid credentials'}]});
            //return json web token
            const payload={
                user:{
                    id:doctor.id
                }
            }
            jwt.sign(payload,config.get('jwttoken'),{expiresIn:3600},(err,token)=>{
                if(err)throw err;
                res.json({token});
            });
        } catch (error) {
            console.log(error.message);
        }
    });

router.get('/:doctor_id',auth,async (req,res)=>{
    try {
        const doctor=await Doctor.findById(req.user.id).select('-password');
        res.json(doctor);
    } catch (err) {
        console.log(err.message);
    }
})

router.delete('/:doctor_id',auth,async (req,res)=>{
    try {
        await Doctor.findOneAndRemove({id:req.params.doctor_id});
        res.json({msg:'User removed'});
    } catch (err) {
        console.log(err.message);
    }
});

router.post('/update',
    auth,
    check('age','Age required').notEmpty(),
    async (req,res)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty())return res.status(400).json({errors:errors.array()});
        const {name,age,phone}=req.body;
        try {
            let doctor=Doctor.findById({id:req.params.receptionist_id});
            if(!doctor)return res.status(400).res({msg:'No User found'});

            const fields={};
            fields.name=name;
            fields.age=age;
            fields.phone=phone;
            doctor=await Doctor.findOneAndUpdate(
                {user:req.user.id},
                {$set:fields},
                {new: true}
            )

            return res.json({msg:'Update Complete'});
        } catch (error) {
            console.log(error.message);
        }
        
    })
module.exports=router;