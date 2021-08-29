import { combineReducers } from "redux";
import countReducer from "./countReducer";
import dataReducer from "./dataReducer";

export const rootReducer = combineReducers({
    count: countReducer,
    data: dataReducer
})

export type State = ReturnType<typeof rootReducer>;