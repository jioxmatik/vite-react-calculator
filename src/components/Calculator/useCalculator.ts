import { Dispatch, Reducer, useReducer } from "react"

interface NumbersMap {
    [key: string]: number;
}
interface State {
    value: string;
    memory: number;
    operation: string;
}

type CalculatorReducer = Reducer<State, string>

const EMPTY = ''
const PERSENT = '%'
const CLEAR_INPUT = 'CE'
const CLEAR = 'C'
const DIFF = '/'
const SEVEN = '7'
const EIGHT = '8'
const NINE = '9'
const MULTIPLY = 'X'
const FOUR = '4'
const FIVE = '5'
const SIX = '6'
const SUB = '-'
const ONE = '1'
const TWO = '2'
const THREE = '3'
const ADD = '+'
const NEGATIVE = '±'
const ZERO = '0'
const POINT = ','
const RESULT = '='

export const GRID_SCHEMA: string[] = [
    PERSENT,
    CLEAR_INPUT,
    CLEAR,
    DIFF,

    SEVEN,
    EIGHT,
    NINE,
    MULTIPLY,

    FOUR,
    FIVE,
    SIX,
    SUB,

    ONE,
    TWO,
    THREE,
    ADD,

    NEGATIVE,
    ZERO,
    POINT,
    RESULT,
]

const CLEAR_LIST = [CLEAR_INPUT, CLEAR]
const MATH_LIST = [DIFF, MULTIPLY, SUB, ADD, RESULT]
const NUMBER_LIST = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE]

const NUMBERS_MAP: NumbersMap = {
    [ZERO]: 0,
    [ONE]: 1,
    [TWO]: 2,
    [THREE]: 3,
    [FOUR]: 4,
    [FIVE]: 5,
    [SIX]: 6,
    [SEVEN]: 7,
    [EIGHT]: 8,
    [NINE]: 9,
}


function getPointState(state: State) {
    const { value } = state
    if (value.includes('.')) return state
    if (!value) return { ...state, value: '0.' }
    return  { ...state, value: `${value}.` }
}

function getNegativeState(state: State) {
    const { value } = state 
    if (!value) return state;
    if (value.includes('-')) return { ...state, value: value.slice(1) }
    return { ...state, value: `-${value}` }
}

function calculate(memory: number, value: number, operation: string) {
    switch (operation) {
        case DIFF: return memory / value
        case MULTIPLY: return memory * value
        case SUB: return memory - value
        case ADD: return memory + value
        case RESULT: return memory
    }
    return value
}

function setNumberState(state: State, action: string) {
    const { value } = state
    return { ...state, value: `${value}${NUMBERS_MAP[action] ?? ''}` }
}

function setClearState(state: State, action = CLEAR_INPUT) {
    const { value } = state
    if (action === CLEAR || !value) return { value: '', memory: 0, operation: EMPTY };
    return { ...state, value: ''}
}

function getPercentState(state: State) {
    const { value, memory } = state
    if (!value) return { ...state, memory:  memory / 100 }
    return { ...state, value: +value / 100 + '' }
}

function getMathState(state: State, action: string) {
    const { value, operation, memory } = state;
    return { ...state, value: '', memory: calculate(memory, +value, operation), operation: action }
}

function reducer(state: State, action: string): State {
    if (CLEAR_LIST.includes(action)) return setClearState(state, action)
    if (MATH_LIST.includes(action)) return getMathState(state, action)
    if (NUMBER_LIST.includes(action)) return setNumberState(state, action)
    if (action === PERSENT) return getPercentState(state)
    if (action === NEGATIVE) return getNegativeState(state)
    if (action === POINT) return getPointState(state)

    return state
}


export function useCalculator(): [string, Dispatch<string>] {
    const [{ value, memory }, dispatch] = useReducer<CalculatorReducer>(reducer, { value: '', memory: 0, operation: EMPTY })
    
    return [value || memory + '', dispatch]
}