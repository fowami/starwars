import React from 'react'
import TableCharacter from './TableCharacter';

export default class MyData extends React.Component {

    constructor() {  
        super();
        this.state = { data: [] };
      }

getData = (obj) => {
// This is the row data from ChildComponent
  console.log("Testing:"+obj);
}

render(){
     return(
          <div>  
           
           {this.state.data.map(item => (
     <TableCharacter obj={item} fetchDetails={this.getData}/>
              ))}
              
       </div>               
        );
    }
}
