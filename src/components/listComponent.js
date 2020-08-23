import React, { Component } from 'react';

 import ModalComponent from './modalComponent';


class ListComponent extends Component {
   constructor(props){
       super(props);
       this.state={
           show: false
       }
   }
   handleHide = () => {
       this.setState({ show: false });
   }
   delete = (id) => {
    this.props.deleteTodo(id)
   }
   render() {
    const {categories,content,id} = this.props.todo;
       return (
<div>
 <div className={'col-sm-6'}>
                       <h4>{content}</h4>
                   </div>
                   <div className={'col-sm-2'}>
                       <h4>{categories}</h4>
                   </div>
                   <div className={'col-sm-1'} onClick={()=>{this.setState({ show: true })}}>
                       <h4><span className="glyphicon glyphicon-pencil"/></h4>
                   </div>
                   <div className={'col-sm-1'} onClick={()=>{this.delete(id)}}>
                       <h4><span className={'glyphicon glyphicon-trash'}/></h4>
                   </div>
                   <ModalComponent show={this.state.show} todo={this.props.todo} editTodo={this.props.editTodo}  handleHide={this.handleHide} />
               </div>
       );
   }}
export default ListComponent;