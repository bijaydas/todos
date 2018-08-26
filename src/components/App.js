import React from 'react';
import NavBar from './NavBar';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            addTodoValue: '',
            todoList: []
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

            // Copying existing TodoList
            let todoList = this.state.todoList;

            // Pushing the new todo value from state to the copied todo list
            todoList.push(todo);

            // Finally adding the updated arr to the state todoList

            this.setState({ todoList: todoList });
            console.log(this.state.todoList);
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
                </section>
            </main>
        );
    }
}

export default App;
