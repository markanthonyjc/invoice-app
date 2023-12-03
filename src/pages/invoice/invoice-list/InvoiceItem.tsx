import Badge from '../../../components/Badge'
import IconCircle from '../../../components/svg/IconCircle'
import style from './InvoiceItem.module.scss'

const InvoiceItem = () => {
  return <div className={style['invoice-item']}>
        <div>
            <p><span>#</span>RT3080</p>
            <p>Jensen Huang</p>
        </div>
        <div>
            <div>
                <p>Due 19 Aug 2021</p>
                <span>£ 1,800.90</span>
            </div>
            <Badge name='Paid' iconComponent={<IconCircle />}/>
        </div>
    </div>
}

export default InvoiceItem
