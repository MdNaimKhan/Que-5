import React, { Component } from 'react';

class AddTodo extends Component {
   saveTodo = () => {
       let newTodoObj = {
           
           description:document.getElementById('txtDesc').value,
           filter:document.getElementById('setFilter').value,
           id:new Date().valueOf()
       }
       this.props.saveTodo(newTodoObj);
       document.getElementById('txtDesc').value=''
       document.getElementById('setFilter').value='Active'
   }
render() {
return (
<div className={'panel panel-default'} >
                   <div className="panel-heading">Add Todo</div>
                   <div className="panel-body">
                       <div className={"form-group"}>
                           
                           <div className={"col-sm-5"}>
                               <input className={'form-control'} 
                               id='txtDesc' 
                               placeholder={'What needs to be done ?'} 
                               type={'text'} />
                           </div>
                           <div className="col-sm-2">
                               <select id={"setFilter"} className={'form-control'}>

                                   <option value={'Active'}>Active</option>
                                  <option value={'Completed'}>Completed</option>
                               </select>
                           </div>
                           <div className={"col-sm-2"}>
                               <button 
                               className={'btn btn-info'} 
                               onClick={()=>{this.saveTodo()}}>Add Todo</button>
                           </div>
                       </div>

                   </div>
               </div>
);
   }}
export default AddTodo;