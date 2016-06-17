'use strict';

import "./carousel.styl";
import carouselTemplate from "./carousel.jade";

export default class Carousel {
  constructor({
    elem,
    items,
    count = 3,        // количество на странице
    autoplay = false, // автопереход
    delay = 3000,     // задержка autoplay
    circle = false    // по кругу
  }) {
    this.elem = elem;
    this.items = items;
    this.autoplay = autoplay;
    this.delay = delay;
    this.circle = circle;

    if (autoplay) {
      // todo: interval handler
      this.interval = setInterval(()=> this.intervalHandler(), 3000)
    }

    if (circle) {

    }

    this.render(items)
  }

  render(items) {
    let carousel = document.createElement('ul');
    this.elem.innerHTML = carouselTemplate({items: items});
  }

  intervalHandler() {

  }
}