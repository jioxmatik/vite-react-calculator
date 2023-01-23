export enum NUMBERS {
    ZERO = '0',
    ONE = '1',
    TWO = '2',
    THREE = '3',
    FOUR = '4',
    FIVE = '5',
    SIX = '6',
    SEVEN = '7',
    EIGHT = '8',
    NINE = '9',
}

export enum MATH {
    DIFF = '/',
    MULTIPLY = 'X',
    SUB = '-',
    ADD = '+',
    RESULT = '='
}

export enum OTHER {
    EMPTY = '',
    PERSENT = '%',
    NEGATIVE = '±',
    POINT = ',',
}

export enum CLEAR {
    INPUT = 'CE',
    ALL = 'C',
}

export type ALL_BUTTONS = NUMBERS | MATH | OTHER | CLEAR;

export const GRID_SCHEMA: ALL_BUTTONS[] = [
    OTHER.PERSENT,
    CLEAR.INPUT,
    CLEAR.ALL,
    MATH.DIFF,

    NUMBERS.SEVEN,
    NUMBERS.EIGHT,
    NUMBERS.NINE,
    MATH.MULTIPLY,

    NUMBERS.FOUR,
    NUMBERS.FIVE,
    NUMBERS.SIX,
    MATH.SUB,

    NUMBERS.ONE,
    NUMBERS.TWO,
    NUMBERS.THREE,
    MATH.ADD,

    OTHER.NEGATIVE,
    NUMBERS.ZERO,
    OTHER.POINT,
    MATH.RESULT,
]

export const NUMBERS_MAP = {
    [NUMBERS.ZERO]: 0,
    [NUMBERS.ONE]: 1,
    [NUMBERS.TWO]: 2,
    [NUMBERS.THREE]: 3,
    [NUMBERS.FOUR]: 4,
    [NUMBERS.FIVE]: 5,
    [NUMBERS.SIX]: 6,
    [NUMBERS.SEVEN]: 7,
    [NUMBERS.EIGHT]: 8,
    [NUMBERS.NINE]: 9,
}

export const INITIAL_STATE = { value: '', memory: 0, operation: OTHER.EMPTY } as const
