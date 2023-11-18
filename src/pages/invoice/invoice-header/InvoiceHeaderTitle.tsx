import style from './InvoiceHeaderTitle.module.scss'

const InvoiceHeaderTitle = () => {
  return <div className={style['invoice-header-title']}>
        <h2>Invoices</h2>
        <span>7 invoices</span>
    </div>
}

export default InvoiceHeaderTitle
