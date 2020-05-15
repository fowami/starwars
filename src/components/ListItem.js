import React from 'react';
const ListItem = (props) => {
 return(
    // Using Props handleClick as callback function
          <div onClick={()=> props.onClick(props.obj)}>
                <p> {props.obj.name} </p>
                <p> {props.obj.height} </p>
                <p> {props.obj.mass} </p>
           </div>
 );
}
export default ListItem;