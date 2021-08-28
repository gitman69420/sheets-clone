import { CHANGE_TYPE, ADD_COLUMN } from "../actions/types";
import { useSelector } from "react-redux";
import { State } from "./index"; 

const initialState = ["string", "string", "string"];

interface IAction{
    type: string,
    payload: {
        index: number,
        type: string
    }
}

export default (state = initialState, action:IAction) => {
    switch(action.type){
        case CHANGE_TYPE:
            return state.filter((item , index) => {if(index===action.payload.index) return action.payload.type });
        case ADD_COLUMN:
            return [...state, action.payload.type];
        default:
            return state;
    }
}
