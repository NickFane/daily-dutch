import React from 'react';
import dutchImage from '../Images/0.png'
const { BlobServiceClient } = require("@azure/storage-blob");


class Home extends React.Component {

getDutchImage = async () => {
  return dutchImage;
}

constructor(props) {
  super(props);
  this.state = { imageFile: '' };
}

async componentDidMount() {  
  this.setState({ imageFile: await this.getDutchImage()}); //await this.getDutchImage();
  console.log(this.state.imageFile)
}

  render() {
    return (
        <div>
          <img src={this.state.imageFile} alt='new'></img>
        </div>
    );
    }
  }

export default Home