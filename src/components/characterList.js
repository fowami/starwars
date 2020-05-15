import React, { Component } from "react";
import axios from "axios";
import TableCharacter from "./TableCharacter.js";
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

class characterList extends Component {
  constructor(props) {
    super(props);
    this.state = { characters: [] ,selected: null};

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .get("https://swapi.dev/api/people")
      .then(response => {
        console.log(response.data.results);
        this.setState({ characters: response.data.results});
        console.log("Characters"+this.state.characters)
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  tabRow() {
    let filteredData = this.state.characters;
    return filteredData.map((data, i) => {
    return <TableCharacter obj={data} key={i} />;
    });
  } 
  renderResultRows() {
    let filteredData = this.state.characters;
    return filteredData.map((data,i) => { 
      return <TableCharacter obj={data} key={i} />;
    });  
}
 
  handleSubmit(event){
    event.preventDefault();
 this.props.history.push("/CharacterDetails");
  }
  render() {
    return (
      <div className="animated fadeIn" >  
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Character List
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm"
                >
                <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Gender</th>
              <th>Gender</th>
              <th>Birth Year</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>{this.renderResultRows()}</tbody>
                </Table>    
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default characterList;
