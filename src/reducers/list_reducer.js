import types from '../actions/types';

const DEFAULT_STATE = {
    all: [], //list of all todo
    single: {}, //single todo item
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}