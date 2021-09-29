import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Local imports
import reducer from '../reducers';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
