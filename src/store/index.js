import { createStore } from 'redux';
import { defaultState } from './defaulState';

export const store = createStore(
    function reducer(state = defaultState, action) {
        return state;
    }
)