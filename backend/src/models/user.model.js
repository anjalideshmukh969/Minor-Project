const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,  
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    }, 
    assistantName: {
        type: String,
    },
    assistantImage:{
        type: String,
    },
    history:[
        {type:String},
    ]

}, {timestamps:true});

userSchema.pre('save', async function(){
    let hashedPass = await bcrypt.hash(this.password,10);
    this.password = hashedPass;
    next();
});

userSchema.methods.comparePass = async function(password){
    let comparePass = await bcrypt.compare(password, this.password);
    return comparePass;
}

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;