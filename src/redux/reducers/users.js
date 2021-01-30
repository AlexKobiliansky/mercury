const initialState = {
    status: ''
}

const users = (state=initialState, action) => {
    switch (action.type) {
        case 'SORT_STATUS':
            return {
                ...state,
                status: action.payload.status
            };
        default: return state;
    }
}

export default users;