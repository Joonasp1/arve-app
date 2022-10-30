import React, { Component } from 'react'

export default class receiptheader extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            due: new Date(),
        }
        this.state.due = new Date(this.state.due.setDate(this.state.due.getDate()+7))
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

  render() {
    return (
     <div className='rheader'>
         <input type="text" maxLength="32"></input>
         <input type="date" value={this.state.date.value} onChange={this.changeBoth.bind(this)} required></input>
         <input type="date" onChange={this.changeDue.bind(this)} required></input>
         <p>Kuupäev: {this.state.date.toLocaleDateString('et-ET')}</p>
         <p>Maksetähtaeg: {this.state.due.toLocaleDateString('et-ET')}</p>
     </div>
   )
  }
}


// import React from 'react'
// import {useState} from 'react';

// function receiptheader() {
//     var test = "No change";
//     var date = new Date()
//     var due = new Date()

//     due.setDate(date + 7);

//     const changeDue = (event) => {
//         due.setDate(event.target.value + 7);
//         test = "Yes change";
//         console.log(test)
//     }

//   return (
//     <div className='rheader'>
//         <input type="text" maxLength="32"></input>
//         <input type="date" onChange={changeDue}></input>
//         <p>{due.toDateString()}</p>
//         <p>{test}</p>
//     </div>
//   )
// }

// export default receiptheader