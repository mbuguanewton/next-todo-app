import React from 'react'

function AddTodo({ value, setValue, edit, submit }) {
    return (
        <div className='addtodo'>
            <h1> Next Todo App</h1>
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
