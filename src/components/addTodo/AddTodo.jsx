import React from 'react'
import { Avatar, Tooltip } from '@material-ui/core'

function AddTodo({ value, setValue, edit, submit, user, logout }) {
    return (
        <div className='addtodo'>
            <div className='addtodo__top'>
                <h1> Next Todo App</h1>
                <div className='addtodo__top--user'>
                    {user && (
                        <Tooltip
                            title='Click on the avatar to logout'
                            placement='left'>
                            <span onClick={logout}>
                                <Avatar
                                    src={user && user.photoURL}
                                    alt={user && user.displayName}
                                    className='avatar'
                                />
                            </span>
                        </Tooltip>
                    )}
                </div>
            </div>
            <div className='addtodo__wrapper'>
                <input
                    type='text'
                    name='todo'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Add todo'
                />

                <button className='btn btn__submit' onClick={submit}>
                    {edit ? 'Edit Todo' : 'Submit'}
                </button>
            </div>
        </div>
    )
}

export default AddTodo
