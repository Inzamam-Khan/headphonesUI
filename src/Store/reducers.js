import { combineReducers } from "redux";

function colorTheme(state="light",action){
    return state;
}


export const allReducers=combineReducers({
    colorTheme
})