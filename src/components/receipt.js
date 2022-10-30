import Receiptheader from './Receiptheader'
import Receiptlines from './Receiptlines'
import Receiptfooter from './Receiptfooter'

import React, { Component } from 'react'

export default class receipt extends Component {

  constructor(props){
    super(props)
    this.state = {
        total: "0",
        date: new Date(),
        due: new Date(),
        lines: [
      ],
    }
    this.state.due = new Date(this.state.due.setDate(this.state.due.getDate()+7))
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
  if(amt.length > 8){
    alert("Koguse välja maksimum on 8 tähemärki")
    return
  }
  if(cst.length > 8){
    alert("Hinna välja maksimum on 8 tähemärki")
    return
  }
  var newIndex = this.state.lines.length + 1;
  var newArray = [...this.state.lines]
  newArray.push({id: newIndex, description: desc, amount: Number(amt), cost: Number(cst)})
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

changeBoth(event) {
  var newdate = new Date(event.target.value)
  var newdue = new Date(event.target.value)
  this.setState({date: newdate})
  newdue = new Date(newdue.setDate(newdate.getDate() + 7))
  this.setState({due: newdue})

}

changeDue(event){
  var newdue = new Date(event.target.value)
  this.setState({due: newdue})
}

  validateFields(){
    if(this.state.date > this.state.due){
      alert("Maksetähtaeg on enne alguskuupäeva")
      return
    }
    alert("Salvestamine õnnestus")

  }

  render() {
    return (
      <div className='receipt'>
        <Receiptheader date={this.state.date} due={this.state.due} changeBoth={this.changeBoth.bind(this)} changeDue={this.changeDue.bind(this)}></Receiptheader>
        <Receiptlines lines={this.state.lines} addLine={this.addLine.bind(this)} removeLine={this.removeLine.bind(this)}></Receiptlines>
        <Receiptfooter total={this.state.total} setTotal={this.setTotal.bind(this)} validateFields={this.validateFields.bind(this)}></Receiptfooter>
      </div>
    )
  }
}
