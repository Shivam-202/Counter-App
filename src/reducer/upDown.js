const initialValue=10;

const changeTheNumber = (state = initialValue,action) => {
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}

const initialState="Hii I am Second Reducer...";
export const secondReducer=(state = initialState,action) => {
    return(initialState);
}

export default changeTheNumber;