import { ADD_COLUMN, ADD_ROW } from "../actions/types";

interface IState { rows: number, columns: number }

const initialState: IState = { rows: 25, columns: 25 };

interface IAction {
    type: string,
    payload: {
        byCount: number
    }
}

const countReducer = (state = initialState, action: IAction): IState => {
    switch (action.type) {
        case ADD_COLUMN:
            return { ...state, columns: state.columns + +(action.payload.byCount) };
        case ADD_ROW:
            return { ...state, rows: state.rows + +(action.payload.byCount) };
        default:
            return state;
    }
}

export default countReducer;