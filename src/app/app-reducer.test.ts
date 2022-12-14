import {appReducer, InitialStateType, setAppErrorAC, setAppStatusAC} from "./app-reducer";

let startState: InitialStateType

beforeEach(() => {

    startState = {
        error: null,
        status: 'idle',
        isInitialized: true
    }
})

test('correct error message should be set', () => {

    const endState = appReducer(startState, setAppErrorAC('Some error'))

    expect(endState.error).toBe('Some error')
});

test('correct status should be set', () => {

    const endState = appReducer(startState, setAppStatusAC('failed'))

    expect(endState.status).toBe('failed')
});

