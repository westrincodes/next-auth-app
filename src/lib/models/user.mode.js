import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    cerkId: {
        type:String,
        required: true,
        unique: true,
    },
    email: {
        type:String,
        required: true,
    },
    firstName: {
        type:String,
        required: true,
    },
    lastName: {
        type:String,
        required: true,
    },
    userName: {
        type:String,
        required: true,
    },
    avatar: {
        type:String,
        required: true,
    }
},{timestamps:true});

const User = mongoose.models.User || mongoose.model('user',userSchema);

export default User;