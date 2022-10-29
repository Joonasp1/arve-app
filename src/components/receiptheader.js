import React, { Component } from 'react'

export default class receiptheader extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            due: new Date(),
            test: "no change"
        }
    }

    changeDue(event) {
        var newdate = new Date(event.target.value)
        this.setState({date: newdate}, () => {console.log(this.state.date)})
        this.setState({due: new Date(this.state.due.setDate(newdate.getDate()+7))}, () => {console.log(this.state.due)})
        this.setState({test: "yes change"});

    }

  render() {
    return (
     <div className='rheader'>
         <input type="text" maxLength="32"></input>
         <input type="date" onChange={this.changeDue.bind(this)}></input>
         <input type="date"></input>
         <p>Due: {this.state.due.toDateString()}</p>
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