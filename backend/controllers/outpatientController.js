const express=require('express');
const { check, validationResult } = require('express-validator');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('config');
const auth=require('../middleware/auth');

const OutPatient=require('../models/outpatient');
router.post(
    '/signup',
    check('name','name is required').not().isEmpty(),
    check('email','email is required').isEmail(),
    check('password','password is required').notEmpty(),
    check('age','age is required').notEmpty(),
    check('phone','phone is required').notEmpty(),
    check('bookedRooms','room is required').notEmpty(),
    check('address','address is required').notEmpty()
    ,
    async (req,res)=>{
        console.log(req.body);
        errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const {name,email,password,age,phone,address,bookedRooms}=req.body;

        try{
            let outPatient=await OutPatient.findOne({email});
            if(outPatient){
                return res.status(400).json({error:[{msg:'User is already taken'}]});
            }

            outPatient=new OutPatient({name,email,password,age,phone,address,bookedRooms});

            //encrypting password
            const salt=await bcrypt.genSalt(10);
            outPatient.password=await bcrypt.hash(password,salt);
            await outPatient.save();
            //return json web token
            const payload={
                user:{
                    id:outPatient.id
                }
            };
            jwt.sign(payload,config.get('jwttoken'),{expiresIn:3600},(err,token)=>{
                if(err)throw err;
                res.json({token});
            });
        }
        catch(err){
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    }
);

router.delete('/:inpatient_id',async (req,res)=>{
    try {
        await OutPatient.findOneAndRemove({id:req.params.inpatient_id});
        res.json({msg:'User removed'});
    } catch (err) {
        console.log(err.message);
    }
});

router.post('/login',
    check('email','Email required').isEmail(),
    check('password','Password required').notEmpty(),
    async (req,res)=>{
        errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const {email,password}=req.body;
        try {
            let outpatient=await OutPatient.findOne({email});
            if(!outpatient){
                return res.status(400).json({error:[{msg:'Invalid credentials'}]});
            }
            
            const isMatch=await bcrypt.compare(password,outpatient.password);
            if(!isMatch)return res.status(400).json({error:[{msg:'Invalid credentials'}]});
            //return json web token
            const payload={
                user:{
                    id:outpatient.id
                }
            }
            jwt.sign(payload,config.get('jwttoken'),{expiresIn:3600},(err,token)=>{
                if(err)throw err;
                res.json({token});
            });
        } catch (err) {
            console.log(err.message);
        }
    })

    module.exports=router;