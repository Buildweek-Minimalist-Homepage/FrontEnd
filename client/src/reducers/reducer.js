export const initialState = [
    {
        item: 'Testing',
        completed: false,
        id: Math.random() * 100000000
    }
]

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: Math.random() * 100000000,
                    item: action.name,
                    completed: false
                }
            ];

        case "TOGGLE":
            return state.map(todo => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                    return todo;
                }
                return todo;
            });
            case "CLEAR":
                return state.filter(todo => todo.completed === false);
            default:
                return state;
            }
        };