import Receiptheader from './Receiptheader'
import Receiptlines from './Receiptlines'
import Receiptfooter from './Receiptfooter'

import React, { Component } from 'react'

export default class receipt extends Component {

  constructor(props){
    super(props)
    this.state = {
        total: "200",
        lines: [
          {id: 1, description: "test1", amount: 1, cost: 24.99, total: 0},
          {id: 2, description: "test2", amount: 3, cost: 1.40, total: 0}
      ],
    }
}

setTotal(){
  var newTotal = 0
  this.state.lines.forEach(element => {
    newTotal += Math.round(element.amount * element.cost * 100) / 100
  });
  newTotal = Math.round(newTotal * 100) / 100
  this.setState({total: newTotal.toString()})
  console.log("CALLED")
}

addLine(desc, amt, cst) {
  var newIndex = this.state.lines.length + 1;
  var newArray = [...this.state.lines]
  newArray.push({id: newIndex, description: desc, amount: amt, cost: cst})
  this.setState({lines: newArray})
}

  render() {
    return (
      <div className='receipt'>
        <Receiptheader></Receiptheader>
        <Receiptlines lines={this.state.lines} addLine={this.addLine.bind(this)}></Receiptlines>
        <Receiptfooter total={this.state.total} setTotal={this.setTotal.bind(this)}></Receiptfooter>
      </div>
    )
  }
}
