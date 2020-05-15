import React, { Component } from 'react';
import {  Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem,  Row } from 'reactstrap';

class CharacterDetails extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Character Details</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                <ListGroupItem>{this.props.obj.name}</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Morbi leo risus</ListGroupItem>
                  <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default CharacterDetails;
