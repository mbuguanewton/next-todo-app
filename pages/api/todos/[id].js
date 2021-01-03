import { resolveHref } from 'next/dist/next-server/lib/router/router'
import connectDb from '../../../src/utils/db'
import { Todo } from '../../../src/utils/db/models/todoModel'

connectDb()

export default async (req, res) => {
    const {
        method,
        body,
        query: { id },
    } = req

    switch (method) {
        case 'GET':
            try {
                const todo = await Todo.findOne({ _id: id })

                if (!todo) {
                    return res.status(400).json({ success: false })
                }
                return res.status(200).json({ todo })
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        case 'PUT':
            try {
                const update = {
                    ...body,
                }
                await TODO.findOneAndUpdate({ _id: id }, update)

                return res.status(200).json({ message: 'todo updated' })
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        default:
            return res.json({
                message: 'accessing unique todo',
            })
    }
}
