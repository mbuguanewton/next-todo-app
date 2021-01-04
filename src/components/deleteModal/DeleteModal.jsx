import React from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    Slide,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
})

function DeleteModal({ open, toggle, delFunc, title }) {
    return (
        <Dialog
            open={open}
            onClose={toggle}
            TransitionComponent={Transition}
            keepMounted
            style={{ borderRadius: '10px', padding: '10px' }}>
            <DialogTitle id='alert-dialog-title'>Delete {title}</DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                    <Alert severity='warning'>
                        Are you sure you want to continue
                    </Alert>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggle} color='primary'>
                    Cancel
                </Button>
                <Button onClick={() => delFunc()} color='secondary' autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteModal
