import React, { Component } from 'react';

export default class Cell extends Component{

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
      }

    changeColor(){
        this.setState({
            color: '#333'
        })
    }

    render(){
        return (
        <div className='cell' onClick={this.changeColor.bind(this)} style={{backgroundColor: this.state.color}}></div>
        )
    }

}