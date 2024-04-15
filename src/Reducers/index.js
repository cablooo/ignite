import { combineReducers } from "redux";
import gamesReducers from './gamesReducers'
import detailReducer from "./detailReducer";


const rootReducer = combineReducers({
    games: gamesReducers,
    detail: detailReducer,
})

export default rootReducer