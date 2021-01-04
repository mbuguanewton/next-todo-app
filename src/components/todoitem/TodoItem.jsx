import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import DeleteModal from '../deleteModal/DeleteModal'
import axios from 'axios'
import { useRouter } from 'next/router'
import EditTodo from '../editTodo/EditTodo'

function TodoItem({ todo, toggle }) {
    const router = useRouter()
    const [open, setOpen] = React.useState(false)
    const [edit, setEdit] = React.useState(false)

    const toggleOpen = () => {
        setOpen((isOpen) => !isOpen)
    }
    const toggleEdit = () => {
        setEdit((isEdit) => !isEdit)
    }

    const handleDelete = async () => {
        const res = await axios.delete(
            `http://localhost:3000/api/todos/${todo._id}`
        )

        if (res.status === '200') {
            toggle()
        }
        router.push('/')
    }

    const handleComplete = async () => {
        const update = {
            ...todo,
            isComplete: !todo.isComplete,
        }

        await axios.put(`http://localhost:3000/api/todos/${todo._id}`, update)

        router.push('/')
    }
    return (
        <>
            <DeleteModal
                open={open}
                toggle={toggleOpen}
                title={todo.title}
                delFunc={handleDelete}
            />
            <EditTodo todo={todo} toggle={toggleEdit} open={edit} />
            <div className='todo'>
                <div className='todo__wrapper'>
                    <div className='todo__wrapper--title'>
                        <h3
                            className={todo.isComplete && 'complete'}
                            onClick={handleComplete}>
                            {todo ? todo.title : <Skeleton />}
                        </h3>
                        <small>
                            Created :{' '}
                            {todo &&
                                new Date(todo.created).toLocaleDateString(
                                    'en-UK'
                                )}
                        </small>
                    </div>
                    <div className='todo__wrapper--actions'>
                        <span className='todo__wrapper--actions-edit'>
                            <FaEdit className='icon' onClick={toggleEdit} />
                        </span>
                        <span className='todo__wrapper--actions-delete'>
                            <FaTrashAlt className='icon' onClick={toggleOpen} />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoItem
