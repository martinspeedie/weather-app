import {
    GET_LOCATION_SEARCH_SUCCESS,
    GET_LOCATION_WEATHER_SUCCESS,
    GET_LOCATION_WEATHER_FAIL,
    GET_LOCATION_SEARCH_FAIL,
} from '../actions/search';

const initialState = {
    error: false,
    locations: [],
    weather: null,
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOCATION_SEARCH_SUCCESS: {
            return {
                error: false,
                locations: action.payload,
            };
        }
        case GET_LOCATION_WEATHER_SUCCESS: {
            return {
                error: false,
                ...state,
                weather: action.payload,
            };
        }
        case GET_LOCATION_WEATHER_FAIL:
        case GET_LOCATION_SEARCH_FAIL: {
            return {
                error: true,
            };
        }
        default:
            return state;
    }
}
