import style from './Header.module.scss'
import HeaderLogo from './HeaderLogo'
import HeaderContent from './HeaderContent'
import HeaderUser from './HeaderUser'

const Header = () => {
  return <header className={style.header}>
    <HeaderLogo/>
    <HeaderContent/>
    <HeaderUser/>
  </header>
}

export default Header
