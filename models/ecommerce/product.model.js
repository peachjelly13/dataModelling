import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      required: true,
      type: String,
    },
    productImg: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    catgeory: {
      type: mongoose.Schema.Types.ObjectId,
      catgeory: 'Category',
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model('Product', productSchema);
