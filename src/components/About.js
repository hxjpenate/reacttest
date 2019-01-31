import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//引入样式
require('./about.css')

class About extends Component{
    constructor(props){
        super(props)
        this.state = {name : '关于我们',todolist:[]};
        this.handeleSubmit = this.handeleSubmit.bind(this)
      
    }
    handeleSubmit(e){
        if(e.keyCode === 13){
            if(e.target.value.length<1){
                alert('请填写任务名')
                return
            }
            let list = this.state.todolist
            list.push({
                title:e.target.value,
                checked:false
            })

            e.target.value = ''
            alert('添加成功')
   
            this.setState({
                todolist:list
            })
            // console.log(this.state.todolist,'ceshi')

            localStorage.setItem('todo',JSON.stringify(list)) 
        }
    }

    componentDidMount(){
        var listArr = JSON.parse(localStorage.getItem('todo'))
           if(listArr){
            this.setState({
                todolist:listArr
            })
           }
    }
    //改变状态
   toggleStatus = (key)=>{
      
       let list= this.state.todolist
       list[key].checked = !list[key].checked
       this.setState({
           todolist:list
       })
       localStorage.setItem('todo',JSON.stringify(list))
   }

    handleDel = (key)=>{
       let list = this.state.todolist
           list.splice(key,1)
       this.setState({
           todolist:list
       })
       localStorage.setItem('todo',JSON.stringify(list))
    }
    render(){
        return(
            <div id='box'>
                <p>{this.state.name}</p>
                <Link to={{pathname:'/Details'}}>跳转到详情</Link> 

                {/* 这是测试TODOlist */}
            

            <div className='Todobox'>
                <p>添加任务：<input type="text"
                    onKeyUp={this.handeleSubmit}
                />
                </p>
                {/* 正在进行 */}
                <div className='working'>
                <h2>进行中</h2>
                    <ul>
                       {
                           this.state.todolist.map((value,key) =>{
                               if(!value.checked){
                                   return(
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.toggleStatus.bind(this,key)}/>
                                        {value.title}
                                        ----------------
                                        <button onClick={this.handleDel.bind(this,key)}>删除</button>
                                    </li>
                                   )
                               }
                           })
                       }
                    </ul>
                </div>
                  {/* 已经完成 */}
                <div className='done'>
                <h2>已完成</h2>
                        <ul>
                            {
                                this.state.todolist.map((item,key)=>{
                                    if(item.checked){
                                        return(
                                           <li key={key}>
                                                <input type="checkbox" checked={item.checked}  onChange={this.toggleStatus.bind(this,key)}/>
                                                {item.title}
                                                ----------------
                                                <button onClick={this.handleDel.bind(this,key)}>删除</button>
                                           </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                </div>
            </div>
       </div>
      
        )
    }
}
export default About;

// import React from 'react';
// import storage from '../model/storage'
// class About extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       list: [],
//       name: 'TODO'
//     }
//   }
//   addData = (e) => {
//     if (e.keyCode === 13) {
//       let title = this.refs.title.value;
//       let tempList = this.state.list;
 
//       tempList.push({
//         title: title,
//         checked: false
//       })
//       this.setState({
//         list: tempList
//       })
//       //表单置为空
//       this.refs.title.value = '';
//       storage.set('todoList',tempList)
//     }
//   }
//   delData = (key) => {
    
//     var temList = this.state.list
//     temList.splice(key, 1)
//     this.setState({
//       list: temList
//     })
//     storage.set('todoList',temList)
//   }
//   checkData = (key) => {
//     let tempList = this.state.list;
//     tempList[key].checked = !tempList[key].checked;
//     this.setState({
//       list: tempList
//     })
//     storage.set('todoList',tempList)
//   }
//   // 生命周期函数 页面加载就会触发
//   componentDidMount () {
//     var todoList = storage.get('todoList')
//     if (todoList) {
//       this.setState({
//         list: todoList
//       })
//     }
//     console.log(this.state.list,'jk')
//   }
//   render () {
//     return (
//       <div>
//         {this.state.name}
//         <br />
//         <input ref='title' onKeyUp={this.addData} />
//         <h2>进行中</h2>
//         <ul>
//           {
              
//             this.state.list.map((value, key) => {
//               if (!value.checked) {
//                 return (
//                   <li key={key}>
//                     <input type='checkbox' checked={value.checked} onChange={this.checkData.bind(this, key)} />{value.title}
//                     -----------
//                     <button onClick={this.delData.bind(this, key)}>删除</button></li>
//                 )
//               }
//             })
//           }
//         </ul>
//         <h2>已完成</h2>
//         <ul>
//           {
//             this.state.list.map((value, key) => {
//               if (value.checked) {
//                 return (
//                   <li key={key}>
//                     <input type='checkbox' checked={value.checked} onChange={this.checkData.bind(this, key)} />{value.title}
//                     -----------
//                     <button onClick={this.delData.bind(this, key)}>删除</button></li>
//                 )
//               }
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }
// export default About;
