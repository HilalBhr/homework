import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Card className='bg-dark text-white'>
          <Card.Img
            src='https://cdn.pixabay.com/photo/2018/08/25/09/33/network-3629619_960_720.jpg'
            alt='we'
          />
          <Card.ImgOverlay>
            <Card.Title>
              <h1>ABOUT US</h1>
            </Card.Title>
            <Card.Text>
              <h6>
                Established in 1989, we are a European private equity firm which
                has successfully supported and rewarded its investors and
                business partners by placing people at the centre of our
                strategy.
              </h6>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <h5>
          Our Team By joining forces with people we believe in, our
          international and ambitious team seeks to generate lasting value. We
          pride ourselves in having transparent and collaborative relationships
          with our partners, understanding their priorities and providing them
          with support.
        </h5>
      </div>
    );
  }
}
