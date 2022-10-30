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
            <input type="text" maxLength="32" onChange={this.updateDescription.bind(this)}></input>
            <label>Kogus:</label>
            <input type="number" onChange={this.updateAmount.bind(this)}></input>
            <label>Hind:</label>
            <input type="number" step="0.01" onChange={this.updateCost.bind(this)}></input>
            <button type='button' onClick={() => {this.props.addLine(this.state.descriptionField, this.state.amountField, this.state.costField)}}>Lisa</button>
        </form>
        <table>
            <thead>
            <tr>
                <th>Kirjeldus</th>
                <th>Kogus</th>
                <th>Hind</th>
                <th>Summa</th>
            </tr>
            </thead>
            <tbody>
        {this.props.lines.map(l => (
            <tr>
                <td id='desc'>{l.description}</td>
                <td>{l.amount}</td>
                <td>{l.cost}</td>
                <td>{Math.round(l.cost * l.amount * 100) / 100}</td>
                <td><button onClick={() => {this.props.removeLine(l.id)}}>Eemalda</button></td>
            </tr>
            ))}
            </tbody>
        </table>
      </div>
    )
  }
}