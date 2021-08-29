import { ADD_DATA, EDIT_DATA, REMOVE_DATA } from "../actions/types";

const initialState: IData[] = [];

interface IData {
    x: number,
    y: number,
    data?: string | object | number | Date
    // data may not be necessary for the REMOVE_DATA action
}

interface IAction {
    type: string,
    payload: IData,
}

export default (state = initialState, action: IAction) => {
    switch (action.type) {
        case ADD_DATA:
            return [...state, action.payload];
        case EDIT_DATA:
            return state.filter((item) => { if (item.x === action.payload.x && item.y === action.payload.y) return action.payload});
        case REMOVE_DATA:
            return state.filter((item) => { return (item.x !== action.payload.x && item.y !== action.payload.y) });
        default:
            return state;
    }
}