import React, { Component } from 'react'
import './Calculadora.css'
import Botao from '../Components/Botao'
import Display from '../Components/Display'

export default class Calculadora extends Component {

        constructor(props) {
            super(props)

            this.clearMemory = this.clearMemory.bind(this)
            this.setOperation = this.setOperation.bind(this)
            this.addDigit = this.addDigit.bind(this)
        }

    clearMemory(){
        console.log('limpar')
    }
    setOperation(operation) {
        console.log(operation)
    }
    addDigit(n) {
        console.log(n)
    }

    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return(
            <div className = "calculadora">

                <Display value={100} />
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