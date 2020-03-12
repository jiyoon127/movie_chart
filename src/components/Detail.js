import React, { Component } from 'react';
import DetailContainer from '../containers/DetailContainers';

class Detail extends Component {
  render() {
    const { history, match } = this.props;
    return (
      <div>
        <DetailContainer history={history} match={match} />
      </div>
    );
  }
}

export default Detail;
