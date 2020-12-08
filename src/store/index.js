import { createStore } from 'redux';



// Initial state for application. Fields should be filled after user allows location (or enters location)
// and call to our backend is made.
const defaultState = {
    latitude: null,
    longitude: null,
    searchBeaches: null,
    beaches: null
}

export const store = createStore(
    function reducer(state = defaultState, action) {

        switch(action.type) {
            // First action receives navigator.geolocation's lat/lng values from landingpage initial load (or user-entered location)
            case 'ADD_CORDS':
                return {
                    ...state,
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude
                }
                default: 
                    return state;
                    
        }
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)