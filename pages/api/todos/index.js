import connectDb from '../../../src/utils/db'
import { Todo } from '../../../src/utils/db/models/todoModel'

connectDb()

export default async (req, res) => {
    const { method, body } = req

    switch (method) {
        case 'GET':
            try {
                const todos = await Todo.find({}).sort({ created: -1 })
                return res.json(todos)
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }

        case 'POST':
            try {
                const todo = new Todo({
                    title: body.title,
                })

                const savedTodo = await todo.save()

                return res.json({ message: 'todo added', todo: savedTodo })
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }

        default:
            return res.json({
                message: 'you are accessing the todos api',
            })
    }
}
