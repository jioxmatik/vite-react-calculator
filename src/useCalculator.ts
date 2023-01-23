import { Dispatch, useReducer } from "react"
import { ALL_BUTTONS, INITIAL_STATE } from "./constants"
import { CalculatorReducer, reducer } from "./reducer"

export function useCalculator(): [string, Dispatch<ALL_BUTTONS>] {
    const [{ value, memory }, dispatch] = useReducer<CalculatorReducer>(reducer, INITIAL_STATE)

    return [value || memory + '', dispatch]
}