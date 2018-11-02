import React from 'react';
import NavBar from './NavBar';
import TodoItems from './TodoItems';

import { connect } from 'react-redux';

class App extends React.Component {

    constructor() {
        super();
        this.state = { addTodoValue: '' };

        this.checkForSubmit = this.checkForSubmit.bind(this);
        this.handleDelete   = this.handleDelete.bind(this);
    }

    checkForSubmit(e) {
        if ( e.key == 'Enter' ) {

            // Adding current Todo value from state
            let todo = this.props.todos;

            // // Copying existing TodoList
            let todoList = this.props.todos;

            // Initializing the lastID with 1
            let lastID = 1;

            if (todoList.length > 0) {

                // If there are some todos present in the array then

                // Fetching the last id from list and adding 1 with it
                lastID = this.props.todos[this.props.todos.length - 1].id;
                lastID++;
            }

            // Adding the todo to the store
            this.props.addTodoToStore({ type: 'ADD_TODO', id: lastID, todo: this.state.addTodoValue });

            // Finally clearing the input box
            this.setState({addTodoValue: ''});
        }
    }

    handleDelete(idToRemove) {
        let NewTodoList = this.state.todoList.filter(data => {
            if ( data.id != idToRemove ) return data;
        });
        this.setState({ todoList: NewTodoList });
    }

    render() {

        return(
            <main>
                <NavBar/>
                <section className="todoOp">
                    <div className="input-field">
                        <input
                            value={this.state.addTodoValue}
                            onChange={ e => this.setState({ addTodoValue: e.target.value }) }
                            onKeyPress={this.checkForSubmit}
                            maxLength="90"
                            type="text" autoFocus={true} placeholder="Add todo"
                        />
                    </div>

                    <div className="todo-list-container">
                        <TodoItems handleDelete={this.handleDelete} todo={this.props.todos}/>
                    </div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoToStore: data => dispatch(data)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
