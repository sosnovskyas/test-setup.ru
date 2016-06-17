'use strict';

// common styles
import "./index.styl";
import indexTemplate from "./index.jade";
import Header from "./components/header";
import Carousel from "./components/carousel";
import ArticleList from "./components/articleList";

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
    {title: 'About Us', image: 'A.png', link: 'about.html', headerBgColor: 'darkGreen'},
    {title: 'Products', image: 'P.png', link: 'products.html', headerBgColor: 'lightGreen'},
    {title: 'News', image: 'N.png', link: 'news.html', headerBgColor: 'brown'}

  ]
});

new ArticleList({
  elem: document.querySelector('.article-list'),
  articles: [{
    title: 'title',
    date: '12 dec',
    content: `lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  }, {
    title: 'title', date: '12 dec', content: `lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scram`
  }]
});