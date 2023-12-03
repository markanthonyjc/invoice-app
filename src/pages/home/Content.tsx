import style from './content.module.scss'
import Invoice from '../invoice/Invoice'

const Content = () => {
  return <main className={style.main}>
        <Invoice />
    </main>
}

export default Content
