import React, { Component } from 'react'
import './Calculadora.css'
import Botao from '../Components/Botao'
import Display from '../Components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}



export default class Calculadora extends Component {

    state = {...initialState }

        constructor(props) {
            super(props)

            this.clearMemory = this.clearMemory.bind(this)
            this.setOperation = this.setOperation.bind(this)
            this.addDigit = this.addDigit.bind(this)
        }

    clearMemory(){
        // console.log('limpar')
        this.setState({ ...initialState })
    }
    setOperation(operation) {
        //console.log(operation)
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true})
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]

            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (error) {
                values[0] = this.state.values[0]
            }
            
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values

            })
        }
    }

    addDigit(n) {
        //console.log(n)
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if(n !=='.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })

        }
    }

    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return(
            <div className = "calculadora">

                <Display value={this.state.displayValue} />
                <Botao label="AC" click = { this.clearMemory } triple />
                <Botao label="/" click = { this.setOperation } operation />
                <Botao label="7" click = { this.addDigit } />
                <Botao label="8" click = { this.addDigit } />
                <Botao label="9" click = { this.addDigit } />
                <Botao label="*" click = { this.setOperation } operation />
                <Botao label="4" click = { this.addDigit } />
                <Botao label="5" click = { this.addDigit } />
                <Botao label="6" click = { this.addDigit } />
                <Botao label="-" click = { this.setOperation } operation />
                <Botao label="1" click = { this.addDigit } />
                <Botao label="2" click = { this.addDigit } />
                <Botao label="3" click = { this.addDigit } />
                <Botao label="+" click = { this.setOperation } operation />
                <Botao label="0" click = { this.addDigit } double />
                <Botao label="." click = { this.addDigit } />
                <Botao label="=" click = { this.setOperation } operation />

            </div>
        )
    }
}