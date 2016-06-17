'use strict';

// common styles
import "./index.styl";
import indexTemplate from "./index.jade";
import Header from "./components/header";
import Carousel from "./components/carousel";
import ArticleList from "./components/articleList";
import Search from "./components/search";

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
    {title: '1 About Us', image: 'A.png', link: 'about.html', headerBgColor: 'darkGreen'},
    {title: '2 Products', image: 'P.png', link: 'products.html', headerBgColor: 'lightGreen'},
    {title: '3 News', image: 'N.png', link: 'news.html', headerBgColor: 'brown'},
    {title: '4 About Us', image: 'A.png', link: 'about.html', headerBgColor: 'darkGreen'},
    {title: '5 Products', image: 'P.png', link: 'products.html', headerBgColor: 'lightGreen'},
    {title: '6 News', image: 'N.png', link: 'news.html', headerBgColor: 'brown'},
    {title: '7 About Us', image: 'A.png', link: 'about.html', headerBgColor: 'darkGreen'},
    {title: '8 Products', image: 'P.png', link: 'products.html', headerBgColor: 'lightGreen'},
    {title: '9 News', image: 'N.png', link: 'news.html', headerBgColor: 'brown'},
    {title: '10 News', image: 'N.png', link: 'news.html', headerBgColor: 'brown'}
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

new Search({
  elem: document.querySelector('.search')
});