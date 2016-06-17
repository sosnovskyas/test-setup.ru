'use strict';

// common styles
import './index.styl'
import indexTemplate from './index.jade'
import Header from './components/header'
import Carousel from './components/carousel'

document.body.innerHTML = indexTemplate();

new Header({
  elem: document.querySelector('.header'),
  navItems: [
    {title: 'home', link: 'index.html'},
    {title: 'blog', link: 'blog.html'},
    {title: 'contacts', link: 'contacts.html'}
  ]
});

new Carousel({
  elem: document.querySelector('.carousel'),
  items: [
    {title: 'About Us', image: 'A.png', link: 'about.html' , headerBgColor: 'darkGreen'},
    {title: 'Products', image: 'P.png', link: 'products.html', headerBgColor: 'lightGreen'},
    {title: 'News',     image: 'N.png', link: 'news.html', headerBgColor: 'brown'}

  ]
});