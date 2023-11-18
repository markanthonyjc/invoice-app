import style from './InvoiceHeader.module.scss'
import InvoiceHeaderTitle from './InvoiceHeaderTitle'
import InvoiceHeaderItems from './InvoiceHeaderItems'

const InvoiceHeader = () => {
  return <header className={style.header}>
        <InvoiceHeaderTitle/>
        <InvoiceHeaderItems/>
    </header>
}

export default InvoiceHeader
