import React from 'react'
import TodoItem from '../todoitem/TodoItem'

function TodoList({ todos, setValue, edit, toggle }) {
    return (
        <div className='todos'>
            <h2>Your Todos</h2>
            <div className='todos__wrapper'>
                {todos && todos.length ? (
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
                )}
            </div>
        </div>
    )
}

export default TodoList
