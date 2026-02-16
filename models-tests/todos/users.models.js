import mongoose from "mongoose";

const userScheme = new mongoose.Schema({

    // emailId: String, // normal way 
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true],
    }
}, {
    timestamps: true
});

export const User = mongoose.model("User", userScheme)// iske ander ka User key word database me jate hi autometic users ho jayega