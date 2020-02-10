import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from "redux-thunk";
import rootReducer from './root-reducer';

// On refresh persist data
function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch(e) {
        console.log(e)
    }
} 
function loadFromLocalStorage(){
    try {
        const serializedStae = localStorage.getItem("state");
        if(serializedStae === null) return undefined;
        return JSON.parse(serializedStae);
    } catch(e){
        console.log(e);
        return undefined;
    }
}
const persistedState = loadFromLocalStorage();

const middlewares = [logger, reduxThunk];

const store = createStore(rootReducer, persistedState, applyMiddleware(...middlewares));

store.subscribe( () => saveToLocalStorage(store.getState()));


export default store;