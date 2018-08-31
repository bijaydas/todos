import React from 'react';

const TodoItems = ({ todo, handleDelete }) => {

    // If some todos are available in the state then display the todos
    // Else display you don't have any todos left

    if ( todo.length > 0 ) {

        const lis = todo.map((data) => {
            return(
                <li key={data.id}>
                {data.todo}
                <i
                onClick={
                    () => {
                        handleDelete(data.id)
                    }
                }
                className="far fa-trash-alt"></i>
                </li>
            );
        });
        return(
            <ul>
                {lis}
            </ul>
        );
    }
    else {
        return(
            <div className="well">
                You dont have any todos left
            </div>
        );
    }
}
export default TodoItems;
