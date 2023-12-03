import { useState } from 'react'
import style from './DropButton.module.scss'
import { IconArrowDown, IconArrowUp } from '../../assets/images'
import type { Props } from './DropButton.d'
import DropButtonItem from './DropButtonItem'

const DropButton = ({ name, items }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dialogStyle = isOpen ? style.dialog : `${style.dialog}${style['--hidden']}`
  const toggleIcon = isOpen ? IconArrowUp : IconArrowDown

  const itemsRender = items?.map(
    (item, index) => <DropButtonItem key={index} id={index} name={item} />
  )

  const toggleDialogHandler = () => {
    setIsOpen(!isOpen)
  }

  return <div className={style.dropdown}>
    <div className={style.button} onClick={toggleDialogHandler}>
      <span>{name}</span>
      <img src={toggleIcon} alt="" />
    </div>
    {
      isOpen &&
      <div className={dialogStyle}>
        {itemsRender}
      </div>
    }
  </div>
}

export default DropButton
