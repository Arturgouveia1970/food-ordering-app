import mongoose from "mongoose";
import {model, models, Schema} from "mongoose";

const UserInfoSchema = new Schema({
  email: {type: String, required: true},
  streetAddress: {type: String},
  postalCode: {type: String},
  city: {type: String},
  country: {type: String},
  phoneNumber: {type: String},
  admin: {type: Boolean, default: false},
}, {timestamps: true});

export const UserInfo = models?.UserInfo || mongoose.model('UserInfo', UserInfoSchema);
