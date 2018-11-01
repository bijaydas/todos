const initState =  [
    { id: 1, todo: 'Buy eggs' },
    { id: 2, todo: 'Clean the house' },
    { id: 3, todo: 'Call Naina' },
    { id: 4, todo: 'Pay the mobile bill' }
]

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;
