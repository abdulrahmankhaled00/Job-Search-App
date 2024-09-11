import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    email: String,
    otp: String,
    createdAt: { type: Date, expires: '5m', default: Date.now }
},{timestamps:true});

export const otpModel=mongoose.model('otp',Schema)
