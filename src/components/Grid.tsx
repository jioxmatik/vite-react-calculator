import { FC, ReactNode } from "react";
import css from '../calculator.module.scss'

interface GridProps {
    children: ReactNode;
}

const Grid: FC<GridProps> = ({ children }) => (
    <div className={css.calculatorGrid}>{children}</div>
)

export default Grid