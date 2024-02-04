import mongoose from 'mongoose';
//We could have written this in another file and then exported but its being used here so there is no need for that only difference you would have to export it
const orderItemSchema = new.mongoose.Schema({
  product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  },
  quantity:{
    type:Number,
    required:true
  }
},{timestamps:true})
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems:{
      type:[orderItemSchema]
    },
    address:{
      type:String,
      required:true
    },
    status:{
      type:String,
      enum:["PENDING","DELIVERED","CANCELLED"],//options to chose from
      default:"PENDING"
    }

  },
  { timestamps: true }
);
export const Order = mongoose.model('Order', orderSchema);
