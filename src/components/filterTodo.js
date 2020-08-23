import React, { Component } from 'react';

class FilterScreen extends Component {
   render() {
       return (

           <div className={'panel panel-default'} >
               <div className="panel-heading">Filters</div>
               <div className="panel-body">
                   <div className={'list-group-item'}>
                       <div className={'row'}>
                           <p> Filter </p>
                           <select id={'filterSelector'} onChange={()=>this.props.onPriorityFilterChange(document.getElementById('filterSelector').value)}>
                               <option value={'All'} defaultValue={(""===this.props.selectedPriority)}>All</option>
                               <option value={'Active'} defaultValue={("Active"===this.props.selectedPriority)}>Active</option>
                               <option value={'Completed'} defaultValue={("Completed"===this.props.selectedPriority)}>Completed</option>
                           </select>
                       </div>
                   </div>
                   
               </div>
           </div>

       );
   }
}

export default FilterScreen;