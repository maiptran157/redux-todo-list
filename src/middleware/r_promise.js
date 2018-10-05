export default (store) => (next) => (action) => {
    //code goes here
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    action.payload.then((resp) => {
        const newAction = {
            ...action,
            payload: resp
        };

        store.dispatch(newAction);

    });

    return action.payload; //this will return a promise

}

// function (store) {
//     return function (next) {
//         return function (action) {
//             //code goes here
//         }
//     }
// }