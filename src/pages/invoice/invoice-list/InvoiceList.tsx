import InvoiceItem from './InvoiceItem'
import style from './InvoiceList.module.scss'
const InvoiceList = () => {
  return <div className={style['invoice-list']}>
        <InvoiceItem />
    </div>
}

export default InvoiceList
