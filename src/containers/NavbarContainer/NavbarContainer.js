import React, { Component } from 'react';
import { Navbar } from '../../components/Navbar';
import { Container } from './NavbarContainer.style';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Navbar
          {...this.props}
          onInputChange={this.props.onInputChange}
        />
      </Container>
    )
  }  
}

export { NavbarContainer };
