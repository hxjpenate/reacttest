import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props)
        this.state =[{name : '首页'}] 
    }
    render(){
        return(
            <div>
                <p>{this.state.name}</p>
                <Link to={{pathname:'/About'}}>跳转到关于我们</Link> 
                
            </div>
        )
    }

}
export default Home;