const jwt = require("jsonwebtoken")

const token = async (userId)=>{
    try {
        const token = await jwt.sign({userId}, process.env.jwt_secret,
            {expiresIn: "15d"});
    } catch (error) {

        console.log(error.message);
    }
}

module.exports = token;