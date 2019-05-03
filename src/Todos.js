import React from 'react';

const List = props => (
  <div className="list-box">
    {
      props.todos.map(   (item, index) => 
	  <div className="list-item" key={item+index}>{item} <button onClick={props.deleteTodo} name={index}>x</button></div>  
	  )
    }
  </div>
);

export default List;