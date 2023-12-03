import style from './InvoiceHeaderItem.module.scss'
import DropButton from '../../../components/drop-button/DropButton'
import Button from '../../../components/Button'
import { Color } from '../../../components/Button.d'
import { IconPlus } from '../../../assets/images'

const InvoiceHeaderItems = () => {
  return <div className={style['invoice-header-items']}>
      <DropButton name={'Filter by status'} items={['Draft', 'Pending', 'Paid']}/>
      <Button name={'New'} icon={IconPlus} color={Color.Primary}/>
    </div>
}

export default InvoiceHeaderItems
