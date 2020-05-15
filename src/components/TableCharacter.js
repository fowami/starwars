import React, { Component } from "react";

class TableCharacter extends Component {
 
  fetchDetails(obj) {
    console.log(obj);
    this.setState({characters:obj});
  // console.log("Data here" +this.props.characters);
    }
    //i should have a method for handle click
  render() {
    return (
      <tr onClick={() => this.fetchDetails(this.props.obj)}>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.height}</td>
        <td>{this.props.obj.mass}</td>
        <td>{this.props.obj.gender}</td>
        <td>{this.props.obj.birth_year}</td>
      <td><button color="success">View</button></td>
      </tr>
    );
  }
}

export default TableCharacter;