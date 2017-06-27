import React from 'react';

export default (loader, collection) => (
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.Component = null;
      this.state = { Component: AsyncComponent.Component };
    }

    componentWillMount() {
      if (!this.state.Component) {
        loader().then((Component) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }

    render() {
        console.log('------------------------------------');
        console.log('collection+props',collection);
        console.log('------------------------------------');
        return this.state.Component ? <this.state.Component { ...this.props } { ...collection } />:<h4>Loading...</h4>
        
      }
  }
);