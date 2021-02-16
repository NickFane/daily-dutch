import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import './DutchHeart.css';

class DutchHeart extends React.Component {

constructor(props) {
  super(props);

}

  render() {
    return (
        <div>
        <IconButton aria-label="delete">
        <FavoriteBorder className="dutchheart" />
      </IconButton>
      </div>
        );
    }
  }

export default DutchHeart