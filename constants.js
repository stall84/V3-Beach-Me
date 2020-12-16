//*** Configuration file exporting different contexts (development of production) of app-wide-used variables  ***/

const prod = {
    url: {
        API_BEACHES: 'https://mes-personal-site.herokuapp.com/api/v1/beaches',
        API_TRIPS: 'https://mes-personal-site.herokuapp.com/api/v1/get-trips',
        API_WEATHER: 'https://mes-personal-site.herokuapp.com/api/v1/get-weather'
    }
}

const dev = {
    url: {
        API_BEACHES: '/api/v1/beaches',
        API_TRIPS: '/api/v1/get-trips',
        API_WEATHER: '/api/v1/get-weather'
    }
}


export const config = process.env.NODE_ENV === 'development' ? dev : prod;