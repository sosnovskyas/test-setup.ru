'use strict';
import "./articleList.styl";
import articleListTemplate from './articleList.jade'

export default class ArticleList {
  constructor({elem, articles}) {
    elem.innerHTML = articleListTemplate({articles: articles});
  }
}