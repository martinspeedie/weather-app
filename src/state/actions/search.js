import axios from 'axios';

export const GET_LOCATION_SEARCH_SUCCESS = 'GET_LOCATION_SEARCH_SUCCESS';
export const GET_LOCATION_SEARCH_FAIL = 'GET_LOCATION_SEARCH_FAIL';

export const GET_LOCATION_WEATHER_SUCCESS = 'GET_LOCATION_WEATHER_SUCCESS';
export const GET_LOCATION_WEATHER_FAIL = 'GET_LOCATION_WEATHER_FAIL';

export const getLocationSearch = (location) => async (dispatch) => {
    try {
        const res = await axios.get(`api/locationSearch/?query=${location}`);
        dispatch({
            type: GET_LOCATION_SEARCH_SUCCESS,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: GET_LOCATION_SEARCH_FAIL,
            payload: console.log(e),
        });
    }
};

export const getLocationWeather = (location) => async (dispatch) => {
    try {
        const res = await axios.get(`api/locationWeather/?query=${location}`);
        dispatch({
            type: GET_LOCATION_WEATHER_SUCCESS,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: GET_LOCATION_WEATHER_FAIL,
            payload: console.log(e),
        });
    }
};
