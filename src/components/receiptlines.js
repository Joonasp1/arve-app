import React, { Component } from 'react'

export default class receiptlines extends Component {
    constructor(props){
        super(props)
        this.state = {
            lines: [
                {id: 1, description: "test1", amount: 1, cost: 24.99, total: 0},
                {id: 2, description: "test2", amount: 3, cost: 1.40, total: 0}
            ],
            descriptionField: "test",
            amountField: 0,
            costField: 0,
        }
    }

    updateDescription(event){
        this.setState({descriptionField: event.target.value})
    }

    updateAmount(event){
        this.setState({amountField: event.target.value})
    }

    updateCost(event){
        this.setState({costField: event.target.value})
    }

  render() {
    return (
      <div className='rlines'>
        <form>
            <label>Description:</label>
            <input type="text" onChange={this.updateDescription.bind(this)}></input>
            <label>Amount:</label>
            <input type="number" onChange={this.updateAmount.bind(this)}></input>
            <label>Cost:</label>
            <input type="number" onChange={this.updateCost.bind(this)}></input>
            <input type="button" value="Add" onClick={() => {this.props.addLine(this.state.descriptionField, Number(this.state.amountField), Number(this.state.costField))}}></input>
        </form>
        <ul>
            {this.props.lines.map(l => (<li key={l.id}>{l.description} {l.amount} {l.cost} {Math.round(l.cost * l.amount * 100) / 100}</li>))}
        </ul>
      </div>
    )
  }
}