import React from 'react'
import style from './InvoiceHeader.module.scss'
import { IconArrowDown, IconPlus } from '../../assets/images'

const InvoiceHeader = () => {
  return <header className={style.header}>
        <div className={style.title}>
            <h2>Invoices</h2>
            <span>7 invoices</span>
        </div>
        <div className={style.options}>
            <div className={style.filterBy}>
                <label htmlFor="filterBy">Filter</label>
                <img src={IconArrowDown} alt=""/>
            </div>
            <div className={style.actions}>
                <button>
                    <div className={style.icon}>
                        <img src={IconPlus} alt=""/>
                    </div>
                    <span className={style.text}>New</span>
                </button>
            </div>
        </div>
    </header>
}

export default InvoiceHeader
