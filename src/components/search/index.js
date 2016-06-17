'use strict';
import "./search.styl";
import searchTemplate from './search.jade'

export default class Header {
  constructor({elem}) {
    elem.innerHTML = searchTemplate();
  }
}