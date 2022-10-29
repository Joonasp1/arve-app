import React from 'react'
import Receiptheader from './Receiptheader'
import Receiptlines from './Receiptlines'
import Receiptfooter from './Receiptfooter'

function receipt() {
  return (
    <div className='receipt'>
        <Receiptheader />
        <Receiptlines />
        <Receiptfooter />
    </div>
  )
}

export default receipt