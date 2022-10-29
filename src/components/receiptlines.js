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

    addLine(event) {
        var newIndex = this.state.lines.length + 1;
        var newArray = [...this.state.lines]
        newArray.push({id: newIndex, description: this.state.descriptionField, amount: Number(this.state.amountField), cost: Number(this.state.costField)})
        this.setState({lines: newArray})
        console.log(this.state.lines)
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
            <input type="button" value="Add" onClick={this.addLine.bind(this)}></input>
        </form>
        <ul>
            {this.state.lines.map(l => (<li key={l.id}>{l.description} {l.amount} {l.cost}</li>))}
        </ul>
      </div>
    )
  }
}