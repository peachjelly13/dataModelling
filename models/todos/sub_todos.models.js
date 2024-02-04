import mongoose from 'moongose';

const subTodo = new mongoose.Schema(
  {
    content: {
      required: true,
      type: String,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const subTodos = mongoose.model('subTodo', subTodo);
