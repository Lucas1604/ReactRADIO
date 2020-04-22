import React, { Component } from 'react';
import img from '../../assets/images/card.png';

import { Image } from './Styles';

class Card extends Component {
  render() {
    return (
      <Image src={img} />
    )
  }
}

export default Card;