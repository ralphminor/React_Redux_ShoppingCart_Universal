"use strict"
import React from 'react';
import {Grid, Col, Row, Button} from 'react-bootstrap';

class About extends React.Component {
  render() {
    return(
      <Grid>
        <Row>
        </Row>
        <Row>
          <Cart />
        </Row>
        <Row style={{marginTop:'1em'}}>
          {booksList}
        </Row>
      </Grid>
    )
  }
}


export default About;