import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { initializeIcons } from '@uifabric/icons';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import notesReducer from './store/reducers/notes';
import fullNoteReducer from './store/reducers/fullNote';
import thunk from 'redux-thunk';

initializeIcons();

const rootReducer = combineReducers({
        notesReducer,
        fullNoteReducer
});

declare global {
        interface Window {
                __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
        }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunk)
));

ReactDOM.render(
        <Provider store={store}>
                <Fabric><App /></Fabric>
        </Provider>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
