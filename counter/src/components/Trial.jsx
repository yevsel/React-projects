import React, { Component } from 'react';

class Trial extends Component {

    constructor(){
        super()
        this.state={
            user:"selasi",
            id:1
        }
    }

    // changeName(){
    //     this.setState([...this.state,{user:"Celia",id:3}])
    // }

    render() { 
        return (
            <div>
                <ul>
                    {/* {this.state.map(item=><li key={item.id}>{item.user}</li>)} */}
                </ul>
                {/* <button onClick={()=>this.changeName()} className='btn btn-secondary'>Change Name</button> */}
            </div>
        )
    }
}
 
export default Trial;