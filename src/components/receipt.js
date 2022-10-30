import Receiptheader from './Receiptheader'
import Receiptlines from './Receiptlines'
import Receiptfooter from './Receiptfooter'

import React, { Component } from 'react'
import './Receipt.css'

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
}

addLine(desc, amt, cst) {
  var newIndex = this.state.lines.length + 1;
  var newArray = [...this.state.lines]
  newArray.push({id: newIndex, description: desc, amount: amt, cost: cst})
  this.setState({lines: newArray}, () => {this.setTotal()})
}

removeLine(id){
  console.log(id);
  var newArray = [...this.state.lines]
  var toRemove = newArray.findIndex((obj) => obj.id === id)
  newArray.splice(toRemove,1)
  var newIndex = 1
  newArray.forEach(element => {
    element.id = newIndex
    newIndex += 1
  });
  this.setState({lines: newArray}, () => {this.setTotal()})
}

  validateFields(){
    console.log("VALIDATE")
  }

  render() {
    return (
      <div className='receipt'>
        <Receiptheader></Receiptheader>
        <Receiptlines lines={this.state.lines} addLine={this.addLine.bind(this)} removeLine={this.removeLine.bind(this)}></Receiptlines>
        <Receiptfooter total={this.state.total} setTotal={this.setTotal.bind(this)} validateFields={this.validateFields.bind(this)}></Receiptfooter>
      </div>
    )
  }
}
