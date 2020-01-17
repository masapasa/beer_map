import React from 'react';
import {
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  Button
} from 'reactstrap';
import './cards.styles.scss';

const Cards = props => {
  return (
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
  );
};

export default Cards;