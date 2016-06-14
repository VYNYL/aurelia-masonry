import { noView, inject, bindable } from 'aurelia-framework';
import Masonry from 'masonry-layout';

@noView
@inject(Element)
export class MasonryCustomAttribute {
  @bindable columnWidth;
  @bindable itemSelector;

  constructor(element) {
    this.element = element;
  }

  bind(element) {
    let masonrySettings = {};
    masonrySettings.columnWidth = this.columnWidth || 200;
    masonrySettings.itemSelector = this.itemSelector || '.grid-item';
    this.masonry = new Masonry(this.element, masonrySettings);
  }

  attached() {
    this.masonry.layout();
  }

  layout() {
    this.masonry.layout();
  }

}
