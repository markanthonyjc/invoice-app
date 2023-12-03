import style from './Badge.module.scss'
import type { Props } from './Badge.d'

const modifierStyles: Record<string, string> = {
  Paid: '--paid',
  Pending: '--pending',
  Draft: '--draft'
}

const Badge = ({ name, iconComponent, icon }: Props) => {
  const modifierStyle = modifierStyles[name] ?? ''
  const modifier = style[`badge${modifierStyle}`] ?? ''
  const badgeStyle = `${style.badge} ${modifier}`.trim()

  return <div className={badgeStyle}>
        {iconComponent}
        {(icon != null) && <img src={icon} alt="" /> }
        <span>{name}</span>
    </div>
}
export default Badge
