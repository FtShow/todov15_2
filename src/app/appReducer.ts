export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
const initState = {
    status: 'loading' as RequestStatusType,
    error: "null" as string | null
}
type initStateType = typeof initState
export const appReducer = (state: initStateType = initState, action: ActionType): initStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return {...state, status: action.status}
        case "APP/SET-ERROR": {
            return {...state, error: action.error}
        }
        default: {
            return state
        }
    }
}
type ActionType =
    | setStatusType
| setErrorType
export type setStatusType = ReturnType<typeof setStatusAC>
export type setErrorType = ReturnType<typeof setErrorAC>
export const setStatusAC = (status: RequestStatusType) => {
    return {
        type: "APP/SET-STATUS",
        status
    } as const
}
export const setErrorAC = (error: string | null) => {
    return {
        type: "APP/SET-ERROR",
        error
    } as const
}

