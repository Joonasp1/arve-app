import React, { Component } from 'react'

export default class receiptfooter extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

  render() {
    return (
        
      <div className='rfooter'>
        <p>Total: {this.props.total}</p>
        <button onClick={() => {this.props.setTotal()}}>Test</button>
      </div>
    )
  }
}
