import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    Slide,
} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
})

function EditTodo({ todo, open, toggle }) {
    const router = useRouter()
    const [value, setValue] = React.useState(todo.title)
    const handleEdit = async () => {
        const update = {
            ...todo,
            title: value,
        }
        const res = await axios.put(
            `http://localhost:3000/api/todos/${todo._id}`,
            update
        )

        if (res.status === 200) {
            toggle()
        }

        router.replace('/')
    }
    return (
        <Dialog
            open={open}
            onClose={toggle}
            TransitionComponent={Transition}
            keepMounted
            className='dialog'>
            <DialogTitle id='alert-dialog-title'>
                Edit : {todo.title}
            </DialogTitle>
            <DialogContent className='dialog__content'>
                <DialogContentText id='alert-dialog-description'>
                    <input
                        name='title'
                        placeholder='Edit todo'
                        className='input'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggle} color='secondary'>
                    Cancel
                </Button>
                <Button className='btn' color='primary' onClick={handleEdit}>
                    Edit Todo
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditTodo
