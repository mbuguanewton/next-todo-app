import React from 'react'
import TodoItem from '../todoitem/TodoItem'

function TodoList({ todos, setValue, edit, toggle, user, login }) {
    return (
        <div className='todos'>
            <h2>Your Todos</h2>
            <div className='todos__wrapper'>
                {user ? (
                    todos && todos.length ? (
                        todos.map((todo) => (
                            <TodoItem
                                key={todo._id}
                                todo={todo}
                                setValue={setValue}
                                edit={edit}
                                toggle={toggle}
                            />
                        ))
                    ) : (
                        <div>No todos available</div>
                    )
                ) : (
                    <button className='btn btn__google' onClick={login}>
                        Login with google
                    </button>
                )}
            </div>
        </div>
    )
}

export default TodoList
