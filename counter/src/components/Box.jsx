import React, { Component } from 'react';
import Header from './Header';
import Display from './Display';
import Button from './Button';
// import Trial from './Trial';

class Box extends Component {

    constructor(){
        super()
        this.state={
            count:0,
        }
    }
    handleIncrement=()=>{
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
        console.log(this.state.count)
    }
    handleDecrement=()=>{
        this.setState((prevState)=>({
            count:prevState.count-1
        }))
        
    }
    handleReset=()=>{
        this.setState((prevState)=>({
            count:prevState.count*0
        }))
    }

    render() { 
        return (
            <div className='container'>
                <Header/>   
                <Display number={this.state.count}/>
                <div className='cta'>
                    <Button background='danger' purpose='Decrease' func={this.handleDecrement}/>
                    <Button background='secondary' purpose='Reset' func={this.handleReset}/>
                    <Button background='primary' purpose='Increase' func={this.handleIncrement}/>
                </div>
                <div className='another'>
                    {/* <Trial/> */}
                </div>
            </div>
        )
    }
}
 
export default Box;