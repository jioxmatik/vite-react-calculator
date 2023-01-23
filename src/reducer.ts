import { Reducer } from "react";
import { ALL_BUTTONS, CLEAR, INITIAL_STATE, MATH, NUMBERS, NUMBERS_MAP, OTHER } from "./constants";

interface State {
    value: string;
    memory: number;
    operation: ALL_BUTTONS;
}

export type CalculatorReducer = Reducer<State, ALL_BUTTONS>

function getPointState(state: State): State {
    const { value } = state
    if (value.includes('.')) return state
    if (!value) return { ...state, value: '0.' }
    return { ...state, value: `${value}.` }
}

function getNegativeState(state: State): State {
    const { value } = state
    if (!value) return state;
    if (value.includes('-')) return { ...state, value: value.slice(1) }
    return { ...state, value: `-${value}` }
}

function calculate(memory: number, value: number, operation: MATH) {
    switch (operation) {
        case MATH.DIFF: return memory / value
        case MATH.MULTIPLY: return memory * value
        case MATH.SUB: return memory - value
        case MATH.ADD: return memory + value
        case MATH.RESULT: return memory
    }
    return value
}

function setNumberState(state: State, action: NUMBERS): State {
    const { value } = state
    return { ...state, value: `${value}${NUMBERS_MAP[action] ?? ''}` }
}

function setClearState(state: State, action: CLEAR): State {
    const { value } = state
    if (action === CLEAR.ALL || !value) return INITIAL_STATE;
    return { ...state, value: '' }
}

function getPercentState(state: State): State {
    const { value, memory } = state
    if (!value) return { ...state, memory: memory / 100 }
    return { ...state, value: +value / 100 + '' }
}

function getMathState(state: State, action: MATH): State {
    const { value, operation, memory } = state;

    return { ...state, value: '', memory: calculate(memory, +value, operation as MATH), operation: action }
}

function includes<T extends object>(actions: T, action: any): action is typeof actions[keyof typeof actions] {
    return Object.values(actions).includes(action)
}

export function reducer(state: State, action: ALL_BUTTONS): State {
    if (includes(CLEAR, action)) {
        return setClearState(state, action)
    }
    if (includes(MATH, action)) {
        return getMathState(state, action)
    }
    if (includes(NUMBERS, action)) {
        return setNumberState(state, action)
    }
    if (action === OTHER.PERSENT) {
         return getPercentState(state)
    }
    if (action === OTHER.NEGATIVE) return getNegativeState(state)
    if (action === OTHER.POINT) return getPointState(state)

    return state
}

