import React from 'react';
import './DutchImage.css'; 

class DutchImage extends React.Component {

constructor(props) {
  super(props);

    var min = 0;
    var max = 5;
    var rand =  min + (Math.random() * (max-min));
    this.state = { dutchSeed: rand.toFixed(0) };
}

  render() {
    return (
        <img className='rotate' src={'https://dailydutchimages.blob.core.windows.net/dutchimages/dutch' + this.state.dutchSeed + '.jpeg'} alt='Dutch goes here'></img>
    );
    }
  }

export default DutchImage