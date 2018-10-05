import types from '../actions/types';

const DEFAULT_STATE = {
    all: [], //list of all todo
    single: {}, //single todo item
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_LIST_DATA:
            return { ...state, all: action.payload.data.todos };
        case types.GET_SINGLE_ITEM:
            // console.log('Single Item Action:', action);
            return { ...state, single: action.payload.data.todo };
        case types.CLEAR_SINGLE_ITEM:
            return { ...state, single: {} };
        case types.TOGGLE_COMPLETE:
            console.log('Toggle complete action:', action);
            return { ...state, single: action.payload.data.todo };
        default:
            return state;
    }
}