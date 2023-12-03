import './Checkbox.module.scss'
import type { Props } from './Checkbox.d'

const Checkbox = ({ id }: Props) => {
  return <input id={id} type="checkbox" />
}

export default Checkbox
