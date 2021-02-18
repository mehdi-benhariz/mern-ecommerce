const express = require('express');
const router = express.Router();
const { signup, signin ,logOut,userInfo} = require('../controllers/auth');
const {auth} =  require('../middleware/auth')

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logOut',auth,logOut);
router.get('/userInfo',auth,userInfo);

module.exports = router;