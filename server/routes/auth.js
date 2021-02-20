const express = require('express');
const router = express.Router();
const { signup, signin ,logOut,userInfo,buyProduct,pannelDetail} = require('../controllers/auth');
const {auth} =  require('../middleware/auth')

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logOut',auth,logOut);
router.get('/userInfo',auth,userInfo);
router.post('/buy',auth,buyProduct);
router.get('/pannel',auth,pannelDetail);

module.exports = router;