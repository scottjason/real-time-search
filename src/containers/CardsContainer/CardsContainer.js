import React, { Component } from 'react';
import { Card } from '../../components/Card';
import { Container } from './CardsContainer.style';

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: {},
    }
  }
  openLink = url => {
    window.open(url, '_blank');
  }
  render() {
    return(
      <Container>
        {this.props.cards.map(card => {
          return (
            <Card
              {...card}
              key={card.id}
              openLink={this.openLink}
              isFeatured={this.props.isFeatured}
              fetchImages={this.props.fetchImages}
            />
          )
        })}
      </Container>
    )
  }  
}

export { CardsContainer };
