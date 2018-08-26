import React from 'react';
import NavBar from './NavBar';
import TodoItems from './TodoItems';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            addTodoValue: '',
            todoList: [
                {
                    id: 1,
                    todo: 'Making coffee'
                },
                {
                    id: 2,
                    todo: 'Go for a walk'
                },
                {
                    id: 3,
                    todo: 'Buy an iPad'
                },
                {
                    id: 4,
                    todo: 'Move to Paris'
                },
                {
                    id: 5,
                    todo: 'Move to Chzech Republic'
                },

            ]
        };

        this.updateTodoInputValue = this.updateTodoInputValue.bind(this);
        this.checkForSubmit       = this.checkForSubmit.bind(this);
    }

    updateTodoInputValue( e ) {
        this.setState({ addTodoValue: e.target.value });
    }

    checkForSubmit( e ) {
        if ( e.key == 'Enter' ) {

            // Adding current Todo value from state
            let todo = this.state.addTodoValue;

            // Clear the input box
            this.setState({addTodoValue: ''});

            // Copying existing TodoList
            let todoList = this.state.todoList;

            // Fetching the last id from list and adding 1 with it
            let lastID = this.state.todoList[this.state.todoList.length - 1].id;
            lastID++;

            // Pushing the new todo value from state to the copied todo list
            todoList.push({id: lastID, todo: todo});

            // Finally adding the updated arr to the state todoList
            this.setState({todoList: todoList});

        }
    }

    render() {
        return(
            <main>
                <NavBar/>
                <section className="todoOp">
                    <div className="input-field">
                        <input
                            value={this.state.addTodoValue}
                            onChange={this.updateTodoInputValue}
                            onKeyPress={this.checkForSubmit}
                            maxLength="90"
                            type="text" autoFocus="true" placeholder="Add todo"
                        />
                    </div>

                    <div className="todo-list-container">
                        <TodoItems todo={this.state.todoList}/>
                    </div>
                </section>
            </main>
        );
    }
}

export default App;