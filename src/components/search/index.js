'use strict';
import "./search.styl";
import searchTemplate from './search.jade'

export default class Search {
  constructor({elem}) {
    elem.innerHTML = searchTemplate();
  }
}