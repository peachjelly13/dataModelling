import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      unique: true,
      lowercase: true,
      type: String,
    },
    email: {
      required: true,
      lowercase: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.Model('User', userSchema);
