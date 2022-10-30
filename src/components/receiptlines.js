import React, { Component } from 'react'

export default class receiptlines extends Component {
    constructor(props){
        super(props)
        this.state = {
            descriptionField: "",
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
            <label>Kirjeldus:</label>
            <input type="text" onChange={this.updateDescription.bind(this)}></input>
            <label>Kogus:</label>
            <input type="number" onChange={this.updateAmount.bind(this)}></input>
            <label>Hind:</label>
            <input type="number" onChange={this.updateCost.bind(this)}></input>
            <input type="button" value="Lisa" onClick={() => {this.props.addLine(this.state.descriptionField, Number(this.state.amountField), Number(this.state.costField))}}></input>
        </form>
        <ul>
            {this.props.lines.map(l => (<div><li key={l.id}>{l.description} {l.amount} {l.cost} {Math.round(l.cost * l.amount * 100) / 100}</li><button onClick={() => {this.props.removeLine(l.id)}}>Eemalda</button></div>))}
        </ul>
      </div>
    )
  }
}