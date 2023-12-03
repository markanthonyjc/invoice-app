import InvoiceHeader from './invoice-header/InvoiceHeader'
import InvoiceList from './invoice-list/InvoiceList'
import style from './Invoice.module.scss'

const Invoice = () => {
  return (
        <section className={style.invoice}>
            <InvoiceHeader />
            <InvoiceList />
        </section>
  )
}

export default Invoice
