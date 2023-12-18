const express=require('express');
const v1Route=require('./version1');

const router=express.Router();

router.use('/version1',v1Route)

module.exports=router;