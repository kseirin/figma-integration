'use strict';

/**
 * @namespace FigmaApi
 */

/**
 * @interface Node
 * @memberOf FigmaApi
 * @property {String} id
 * @property {String} name
 * @property {Boolean} visible
 * @property {*} type
 */
class Node {
  /**
   * @param data
   * @param {String=} data.id
   * @param {String=} data.name
   * @param {Boolean=} data.visible
   * @param {*=} data.type
   */
  constructor(data) {
    this.id = data.hasOwnProperty('id') ? data.id : '';
    this.name = data.hasOwnProperty('name') ? data.name : '';
    this.visible = data.hasOwnProperty('visible') ? data.visible : true;
    this.type = data.hasOwnProperty('type') ? data.type : null;
  }
}

module.exports = Node;