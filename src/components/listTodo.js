import React, { Component } from 'react';
import TodoComponent from './listComponent'

class ListTodo extends Component {
   render() {
       return (
           <div>
               <div className={'panel panel-default'} >
                   <div className="panel-heading">Todos</div>
                   <div className="panel-body">
                       {
                           this.props.list.map((todo,index)=> {
                               return <div key={index} className={'list-group-item col-sm-12'}>
                                   <TodoComponent deleteTodo={this.props.deleteTodo} editTodo={this.props.editTodo} todo={todo}/>
                               </div>
                           })
                       }
                   </div>
               </div>
           </div>
       );
   }}
export default ListTodo;