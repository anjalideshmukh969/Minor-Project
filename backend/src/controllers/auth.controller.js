const UserModel = require("../models/user.model")
const jwt = require("jsonwebtoken");
const token = require("../config/token")

const registerController = async (req,res)=>{
    try {
        let {name,email,password,phone} = req.body;

        if(!name || !email || !password || !phone){
            return res.status(422).json({
                message: "All fields are required"
            })  
        }

        let existingUser = await UserModel.findOne({email});
        if(existingUser) {
            return res.status(400).json({
                message:"User Already exists"
            })
        }

        if(password.length<6){
            return res.status(400).json({
                message: "password must be atleast 6 characters !"
            })
        }

        const token = await token(user._id)
        res.cookie("token",token,{
            httpOnly : "true",
            maxAge: "15*24*60*60*1000",
            sameSite : "strict",
            secure: false
            
        })

        let newUser = await UserModel.create({
            name,
            email,
            password,
            phone,
        })

        return res.status(201).json({
            message: "User registered successfully",
            user: newUser,
        });

    } catch (error) {
         console.log("error in registration", error);
         return res.status(500).json({
            message: "Internal server error",
            error: error,
        });
    }
}

const loginController = async (req,res)=>{
    try {
        const {email,password} = req.body;
        
        const user = await UserModel.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"email does not exists"
            })
        }

         if (!email || !password) {
            return res.status(422).json({
                message: "email and password requied",
            });
        }

        // compare ppassword to check if user is valid
        let cp = await user.comparePass(password);
         if (!cp) 
             return res.status(400).json({
            message: "Invalid credentials or wrong email & passsword",
         });

        if(password.length<6){
            return res.status(400).json({
                message:'password must be atleast 6 characters '
            })
        }
        res.cookie("token", token);

            return res.status(200).json({
                message: "User logged in successfully",
                user: user,
            });
    } catch (error) {
         console.log("error in login", error);
        return res.status(500).json({
            message: "internal server error",
            error: error,
        })
    }
}

const logoutController = async (req,res)=>{
    try {
        res.clearCookie("token")
        return rs.status(200).json({
            message:'User logged out'
        })
    } catch (error) {
        return res.status(500).json({
            message:`logout error ${error}`
        })
    }
}

module.exports = {
    registerController,
    loginController,
    logoutController,
}