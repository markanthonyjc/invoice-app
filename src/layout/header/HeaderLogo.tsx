import style from './HeaderLogo.module.scss'
import { Logo } from '../../assets/images'

const HeaderLogo = () => {
  return <div className={style.logo}>
        <img src={Logo} alt="App logo" />
    </div>
}

export default HeaderLogo
