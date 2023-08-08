import {setErrorAC, setErrorType, setStatusAC, setStatusType} from "../app/appReducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";

export const handleServerAppError = <T>(dispatch: Dispatch<errorUtilsDispatchType>, data: ResponseType<T>) => {
    dispatch(setErrorAC(data.messages[0] ?? "unknown message"))
    dispatch(setStatusAC('succeeded'))
}

export const handlerServerNetworkUtils = (dispatch: Dispatch<errorUtilsDispatchType>, error: string) => {
    dispatch(setErrorAC(error))
    dispatch(setStatusAC('succeeded'))
}

type errorUtilsDispatchType = setErrorType | setStatusType
