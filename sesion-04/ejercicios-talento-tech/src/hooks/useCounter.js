import { useReducer } from 'react';

export const useCounter = (initialState = 0) => {
    const [counter, setCounter] = useReducer((state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return initialState;
            default:
                return state;
        }
    }, initialState);

    const increment = () => {
        setCounter('increment');
    };

    const decrement = () => {
        setCounter('decrement');
    };

    const reset = () => {
        setCounter('reset');
    };

    return {
        counter,
        increment,
        decrement,
        reset
    }
}