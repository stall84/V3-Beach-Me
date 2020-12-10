import { createStore } from 'redux';



// Initial state for application. Fields should be filled after user allows location (or enters location)
// and call to our backend is made.
const defaultState = {
    latitude: null,
    longitude: null,
    searchBeaches: null,
    beaches: null,
    forecasts: null,
    day: null
}

export const store = createStore(
    function reducer(state = defaultState, action) {

        switch(action.type) {
            // First action receives navigator.geolocation's lat/lng values from landingpage initial load (or user-entered location)
            case 'ADD_COORDS':
                return {
                    ...state,
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude
                }
            case 'ADD_SEARCH_BEACHES':
            // Add_Search_Beaches action stores an array of the closest beaches to the user as determined by our API using their previously stored lat/lng 
            // and our Mongo database of beach locations (with a little mongo gelocation logic)   
                return {
                    ...state,
                    searchBeaches: action.payload.searchBeaches
                }
            case 'ADD_BEACHES':
                return {
                    ...state,
                    beaches: action.payload.beaches
                }
            case 'ADD_FORECASTS':
                return {
                    ...state,
                    forecasts: action.payload.forecasts
                }
            case 'ADD_DATE':
                return {
                    ...state,
                    day: action.payload.day
                }                
                default: 
                    return state;
                    
        }
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)