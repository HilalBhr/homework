import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Foruma from './Foruma';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className='d-block w-100'
              src='https://cdn.pixabay.com/photo/2018/06/16/16/20/career-3478983_960_720.jpg'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className='d-block w-100'
              src='https://cdn.pixabay.com/photo/2021/09/25/15/46/step-by-step-6655274_960_720.jpg'
              alt='Second slide'
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://cdn.pixabay.com/photo/2016/10/24/23/11/doors-1767563_960_720.jpg'
              alt='Third slide'
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Foruma />
      </div>
    );
  }
}
