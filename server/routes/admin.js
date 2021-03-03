const express = require("express");
router = express.Router();

const {getAdminBoard} = require("../controllers/admin");

const { auth ,admin} = require("../middleware/auth");

router.get('/',auth,admin,getAdminBoard);

module.exports=router;