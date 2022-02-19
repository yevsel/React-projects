import React, { Component } from 'react';

class Display extends Component {
    render() { 
        return (
            <div class='platform'>
                <h1 className='text-center display-1'>{this.props.number}</h1>
            </div>
        )
    }
}
 
export default Display;