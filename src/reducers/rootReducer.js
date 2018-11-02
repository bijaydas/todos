const initState =  [
    { id: 1, todo: 'Buy eggs' },
    { id: 2, todo: 'Clean the house' },
    { id: 3, todo: 'Call Naina' },
    { id: 4, todo: 'Pay the mobile bill' }
]

const rootReducer = (state = initState, action) => {

    if (action.type === 'ADD_TODO') {
        let newState = [...state, { id: action.id, todo: action.todo }];
        state = newState;
    }

    if (action.type === 'REMOVE_TODO') {

        let idToRemove = action.id;
        let newState   = state.filter(todo => {
            if (todo.id != idToRemove) return todo;
        });

        state = newState;
    }

    return state;
}

export default rootReducer;
