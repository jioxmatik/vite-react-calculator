import { ButtonHTMLAttributes, FC } from 'react' 
import css from './calculator.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = (props) => (
     <button className={css.calculatorButton} {...props} />
 )

export default Button
