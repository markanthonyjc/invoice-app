import React from 'react'
import style from './HeaderContent.module.scss'
import { IconMoon } from '../../../assets/images'

const HeaderContent = () => {
  return <div className={style.content}>
        <div className={style.theme}>
            <img src={IconMoon} alt="Change theme"/>
        </div>
    </div>
}

export default HeaderContent
