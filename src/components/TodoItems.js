import React from 'react';

const TodoItems = ( props ) => {
    const li = props.todo.map(( key, value ) => {
        return(
            <li key={key.id}>
                {key.todo}
                <i className="far fa-trash-alt"></i>
            </li>
        );
    });
    return(
        <ul>
            {li}
        </ul>
    );
}
export default TodoItems;
