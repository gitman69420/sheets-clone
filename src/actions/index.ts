import * as action from "./types";
import { Dispatch } from "redux";

interface ICountPayload {
    byCount?: number
}

interface ITypePayload {
    index: number,
    type: string
}

interface IDataPayload {
    x: number,
    y: number,
    data?: string | object | number | Date
}

// COUNT REDUCER ACTIONS

// given no parameter while calling add row and column action, 
// the default count will be 1
const defaultCount: ICountPayload = { byCount: 1 };

export const addColumn = (payload: ICountPayload = defaultCount) => (
    (dispatch: Dispatch) => dispatch({
        type: action.ADD_COLUMN,
        payload
    })
)

export const addRow = (payload: ICountPayload = defaultCount) => (
    (dispatch: Dispatch) => dispatch({
        type: action.ADD_ROW,
        payload
    })
)

// TYPE REDUCER ACTIONS
export const changeType = (payload: ITypePayload) => (
    (dispatch: Dispatch) => dispatch({
        type: action.CHANGE_TYPE,
        payload
    })
)

// DATA REDUCER ACTIONS
export const addData = (payload: IDataPayload) => (
    (dispatch: Dispatch) => dispatch({
        type: action.ADD_DATA,
        payload
    })
)

export const removeData = (payload: IDataPayload) => (
    (dispatch: Dispatch) => dispatch({
        type: action.REMOVE_DATA,
        payload
    })
)

export const editData = (payload: IDataPayload) => (
    (dispatch: Dispatch) => dispatch({
        type: action.EDIT_DATA,
        payload
    })
)