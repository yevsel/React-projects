import React, { Component } from 'react';

class Button extends Component {
    bgColor(){
        return `btn btn-${this.props.background}`
    }
    render() { 
        return (
            <div>
                <button onClick={()=>this.props.func()} className={this.bgColor()}>{this.props.purpose}</button>
            </div>
        )
    }
}
 
export default Button;