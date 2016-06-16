'use strict';

import './carousel.styl'

export default class Carousel {
  constructor({
    elem
  }) {

  }

  _makeCarousel(elem) {
    let carousel = document.createElement('div');

    elem.appendChild(carousel);

  }
}