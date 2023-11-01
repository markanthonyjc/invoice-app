import React from 'react'
import style from './HeaderLogo.module.scss'
import { Logo as _Logo } from '../../assets/images'

const HeaderLogo = () => {
  return <div className={style.logo}>
        <img src={_Logo} alt="App logo" />
    </div>
}

export default HeaderLogo
