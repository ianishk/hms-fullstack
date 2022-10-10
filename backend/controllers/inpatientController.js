const express=require('express');
const { check, validationResult } = require('express-validator');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('config');
const auth=require('../middleware/auth');

const Inpatient=require('../models/inpatient');
router.post(
    '/signup',
    check('name','name is required').not().isEmpty(),
    check('email','email is required').isEmail(),
    check('password','password is required').notEmpty(),
    check('age','age is required').notEmpty(),
    check('phone','phone is required').notEmpty(),
    check('address','address is required').notEmpty()
    ,
    async (req,res)=>{
        console.log(req.body);
        errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const {name,email,password,age,phone,address}=req.body;

        try{
            let inpatient=await Inpatient.findOne({email});
            if(inpatient){
                return res.status(400).json({error:[{msg:'User is already taken'}]});
            }

            inpatient=new Inpatient({name,email,password,age,phone,address});

            //encrypting password
            const salt=await bcrypt.genSalt(10);
            inpatient.password=await bcrypt.hash(password,salt);
            await inpatient.save();
            //return json web token
            const payload={
                user:{
                    id:inpatient.id
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
        await Inpatient.findOneAndRemove({id:req.params.inpatient_id});
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
            let inpatient=await Inpatient.findOne({email});
            if(!inpatient){
                return res.status(400).json({error:[{msg:'Invalid credentials'}]});
            }
            
            const isMatch=await bcrypt.compare(password,inpatient.password);
            if(!isMatch)return res.status(400).json({error:[{msg:'Invalid credentials'}]});
            //return json web token
            const payload={
                user:{
                    id:inpatient.id
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

router.get('/',async(req,res)=>{
    try {
        const inpatient=await Inpatient.find();
        res.json(inpatient);
    } catch (err) {
        console.log(err.message);
    }
})

module.exports=router;