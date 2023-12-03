import style from './Badge.module.scss'
import type { Props } from './Badge.d'

const modifiersStyles: Record<string, string> = {
  Paid: '--paid',
  Pending: '--pending',
  Draft: '--draft'
}

const Badge = ({ name, iconComponent, icon }: Props) => {
  const badgeStyle = `${style.badge} ${style[`badge${modifiersStyles[name]}`] ?? ''}`.trim()

  return <div className={badgeStyle}>
        {iconComponent}
        {(icon != null) && <img src={icon} alt="" /> }
        <span>{name}</span>
    </div>
}
export default Badge
