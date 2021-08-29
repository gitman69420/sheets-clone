import { ADD_COLUMN, ADD_ROW } from "../actions/types";

const initialState:{rows:number, columns:number} = {rows:25, columns: 25};

interface IAction {
    type: string,
    payload: {
        byCount: number 
    }
}

export default (state = initialState, action:IAction) => {
    switch(action.type){
        case ADD_COLUMN:
            return {...state, columns: state.columns + +(action.payload.byCount)};
        case ADD_ROW:
            return {...state, rows: state.rows + +(action.payload.byCount)};
        default:
            return state;
    }
}