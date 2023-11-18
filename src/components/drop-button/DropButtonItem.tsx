import style from './DropButtonItem.module.scss'
import { type Props } from './DropButtonItem.d'

const DropButtonItem = ({ id, name }: Props) => {
  return <div className={style['drop-button-item']}>
      <label htmlFor={`item${id}`}>
          <input id={`item${id}`} type='checkbox' />
          {name}
      </label>
    </div>
}

export default DropButtonItem
