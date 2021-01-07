import mongoose, { Schema } from 'mongoose'

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: String,
        default: null,
    },
    created: {
        type: Number,
        default: new Date().getTime(),
    },
})

export const Todo = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)
