import React, { Component } from 'react';

const NAMESPACE = 'REACT_APP_REAL_TIME_SEARCH';

const withStorage = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isAvailable: this.isAvailable(),
      };
    }
    isAvailable() {
      try {
        localStorage.setItem(NAMESPACE, NAMESPACE);
        localStorage.removeItem(NAMESPACE);
        return true;
      } catch(e) {
        return false;
      }
    }
    setItem = (k, v) => {
      return localStorage.setItem(`${NAMESPACE}_${k}`, v);
    }
    getItem = k => {
      return localStorage.getItem(`${NAMESPACE}_${k}`);
    }
    render() {
      return (
        <WrappedComponent
          getItem={this.getItem}
          setItem={this.setItem}
          isAvailable={this.state.isAvailable}
        />
      )
    }
  }
}

export default withStorage;