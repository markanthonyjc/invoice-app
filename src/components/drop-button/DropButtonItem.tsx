import style from './DropButtonItem.module.scss'
import { type Props } from './DropButtonItem.d'
import Checkbox from '../Checkbox'

const DropButtonItem = ({ id, name }: Props) => {
  return <div className={style['drop-button-item']}>
      <label htmlFor={`item${id}`}>
          <Checkbox id={`item${id}`} />
          {name}
      </label>
    </div>
}

export default DropButtonItem
