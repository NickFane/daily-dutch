import React from 'react';
import DutchImage from '../DutchImage/DutchImage'
import DutchHeart from '../DutchHeart/DutchHeart'

class Home extends React.Component {

constructor(props) {
  super(props);
}

  render() {
    return (
        <div>
          <DutchImage />
          <DutchHeart />
        </div>
    );
    }
  }

export default Home