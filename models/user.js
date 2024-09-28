import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    favourites: { 
        type: [String],
        default:[] 
    }
   
})
let userModel;

try {
    // Trying to fetch the existing model to avoid re-compilation
    userModel = mongoose.model('users');
} catch (error) {
    // If model doesn't exist, create a new one
    userModel = mongoose.model('users', schema);
}

export { userModel };