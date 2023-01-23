import { FC, ReactNode } from "react";
import css from '../calculator.module.scss'

interface ResultProps {
    children: ReactNode;
} 

const Result: FC<ResultProps> = ({ children }) => (
    <div className={css.calculatorResult}>{children}</div>
)

export default Result
