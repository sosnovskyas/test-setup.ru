'use strict';
import "./header.styl";
import "../nav";
import "../logo";
import headerTemplate from './header.jade'

export default class Header {
  constructor({elem, navItems}) {
    elem.innerHTML = headerTemplate({navItems: navItems});
  }
}