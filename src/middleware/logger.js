const logger = function(store) {
    return function(next) {
        return function(action) {
            console.group(action.type);
                console.log('the action: ', action);
                const returnvalue = next(action);
                console.log('the new state: ', store.getState());
            console.groupEnd();
            return returnvalue;
        }
    }
};

export default logger;