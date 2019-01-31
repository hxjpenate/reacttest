import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Details extends Component{
    constructor(props){
        super(props)
        this.state = {name : '详情'}
    }
    render(){
        return(
            <div>
                <p>{this.state.name}</p>
                <Link to={{pathname:'/Home'}}>跳转到关于shouye</Link> 
            </div>
        )
    }

}
export default Details;