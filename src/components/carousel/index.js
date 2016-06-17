'use strict';

import "./carousel.styl";
import carouselTemplate from "./carousel.jade";
import listTemplate from "./list.jade";

export default class Carousel {
  constructor({
    elem,
    items,
    count = 3,        // количество на странице
    autoplay = false, // автопереход
    delay = 3000,     // задержка autoplay
    circle = false,   // по кругу
    current = 1       // текущая page
  }) {
    elem.innerHTML = carouselTemplate();
    this.list = elem.querySelector('.carousel__list');

    this.items = items;
    this.count = count;

    this.currentPage = current;
    this.maxPages = Math.ceil(items.length / this.count);

    this.autoplay = autoplay;
    this.delay = delay;

    if (this.autoplay) {
      this.circle = true;
    } else {
      this.circle = circle;
    }

    this.render(this.currentPage);
    elem.addEventListener('click', (event) => this.onClick(event));
    if (this.autoplay) this.runAutoplay();
  }

  render(page) {
    let items = [];

    for (let i = 0; i < this.count; i++) {
      let item = this.items[((page - 1) * this.count) + i];
      if (item) {
        items.push(item);
      }
    }

    this.list.innerHTML = listTemplate({items: items});
  }

  next() {
    if (this.currentPage == this.maxPages) {
      if (this.circle) {
        this.currentPage = 1;
        this.render(this.currentPage);
      }
    } else {
      this.render(++this.currentPage);
    }
  }

  previous() {
    if (this.currentPage == 1) {
      if (this.circle) {
        this.currentPage = this.maxPages;
        this.render(this.currentPage);
      }
    } else {
      this.render(--this.currentPage);
    }
  }

  onClick(event) {
    if (event.target.closest('.carousel__arrow-left')) this.previous();
    if (event.target.closest('.carousel__arrow-right')) this.next();
  }

  runAutoplay() {
    setInterval(()=> {
      this.next();
    }, this.delay)
  }
}