const jwt = require("jsonwebtoken");

exports.createJWT = (email, userId, duration) => {
   const payload = {
      email,
      userId,
      duration
   };
   return jwt.sign(payload, process.env.TOKEN_SECRET, {
     expiresIn: duration,
   });
};

exports.getUserByToken=async(token)=>{
   const decode = await jwt.verify(token, process.env.TOKEN_SECRET);
   const user = await User.findById(decode.userId);
   return user;
}