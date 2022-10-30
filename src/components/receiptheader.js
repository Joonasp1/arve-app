import React, { Component } from 'react'

export default class receiptheader extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            due: new Date()
        }
        this.state.due = new Date(this.state.due.setDate(this.state.due.getDate()+7))
    }

  render() {
    return (
     <div className='rheader'>
        <p>Nimi: </p>
         <input type="text" maxLength="32"></input>
         <p>Kuupäev: {this.props.date.toLocaleDateString('et-ET')}</p>
         <input type="date" onChange={this.props.changeBoth} required></input>
         <p>Maksetähtaeg: {this.props.due.toLocaleDateString('et-ET')}</p>
         <input type="date"  onChange={this.props.changeDue} required></input>
     </div>
   )
  }
}