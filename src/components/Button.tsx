import style from './Button.module.scss'
import type { Props } from './Button.d'

export const modifierStyles: Record<string, string> = {
  Primary: '--primary'
}

const Button = ({ name, icon, color, clickHandler }: Props) => {
  const modifierStyle = modifierStyles[color]
  const modifier = style[`button${modifierStyle}`]
  const buttonStyle = `${style.button} ${modifier}`

  return <button className={buttonStyle} onClick={clickHandler}>
        <span className={style.icon}>
            <img src={icon} alt="" />
        </span>
        <span className={style.name}>{name}</span>
    </button>
}

export default Button
