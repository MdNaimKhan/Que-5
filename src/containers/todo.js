import React, { Component } from 'react';
import AddTodo from '../components/addTodo'
import FilterScreen from '../components/filterTodo';
import ListTodo from '../components/listTodo'
import { connect } from 'react-redux'
import {createTodo,deleteTodo,setFilter,updateTodo} from '../actions/todoAction'
import _ from 'lodash'

class Todo extends Component {
   constructor(){
       super();
       this.state={
           currentPage:1,
           todoPerPage:5
       }
   }
    saveTodo= (newTodo) => {
    this.props.createTodo(newTodo);
    };
    deleteTodo = (id) => {
        this.props.deleteTodo(id);
    };
    editTodo = (editedTodo) => {
        this.props.updateTodo(editedTodo);
    }
    onFilterChange = (value) => {
        this.props.setFilter(value);
    };
   
   render() {
       const { currentPage, todoPerPage } = this.state;
       let todos = (this.props.priorityFilter!=="All")?
            _.filter(this.props.todos,(obj) => { return (obj.categories===this.props.priorityFilter)})
            : _.filter(this.props.todos,(obj) => { return (_.includes(obj.title, this.props.searchText ))})
      debugger
       const indexOfLastTodo = currentPage * todoPerPage;
       const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
       const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
       const pageNumbers = [];
       for (let i = 1; i <= Math.ceil(todos.length / todoPerPage); i++) {
           pageNumbers.push(i);
       }
       return (
           <div className="row content">
               <div className="col-sm-2 sidenav">
                   <FilterScreen    selectedPriority={this.props.priorityFilter}
                                    searchText={this.props.searchText}
                                    onPriorityFilterChange={this.onPriorityFilterChange}
                                    onSearchTextChange={this.onSearchTextChange}/>
               </div>
               <div className={'col-sm-8 text-left'}>
                   <AddTodo saveTodo={this.saveTodo}/>
                   <ListTodo list={currentTodos}
                             deleteTodo={this.deleteTodo}
                             editTodo={this.editTodo}
                   />
                   <ul className="pagination">
                       { pageNumbers.map((i,index)=>{
                           return <li key={index} onClick={()=>{this.setState({currentPage:i})}}>
                              
                           </li>
                       })}
                   </ul>
               </div>
           </div>
       );
   }}

const mapStateToProps = (state) => ({
    todos:state.todo.todo,
    priorityFilter:state.todo.priorityFilter,
 });

const mapActionToProps = ({
    createTodo,updateTodo,setFilter,deleteTodo,
});
 
export default connect(mapStateToProps, mapActionToProps)(Todo);   
