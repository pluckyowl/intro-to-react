 import React, { Component } from 'react';

 class ToDo extends Component {
   render() {
     return (
       <li style={{ listStyleType: "none" }}>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }   </span>
         <button name="delete" onClick={ this.props.deleteTodo }>x</button>
       </li>
     );
   }
 }

 export default ToDo;
