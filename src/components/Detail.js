import React, { Component } from 'react';
import DetailContainer from '../containers/DetailContainers';

class Detail extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <DetailContainer id={id} />
      </div>
    );
  }
}

export default Detail;
