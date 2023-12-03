import React from 'react'
import style from './HeaderUser.module.scss'
import { ImageAvatar } from '../../assets/images'

const HeaderUser = () => {
  return <div className={style.user}>
        <img src={ImageAvatar} alt="User image"/>
    </div>
}

export default HeaderUser
