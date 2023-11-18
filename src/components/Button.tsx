import style from './Button.module.scss'
import { type Props } from './Button.d'

const Button = ({ name, icon, clickHandler }: Props) => {
  return <button onClick={clickHandler}>
        <div className={style.icon}>
            <img src={icon} alt=""/>
        </div>
        <span className={style.name}>{name}</span>
    </button>
}

export default Button
