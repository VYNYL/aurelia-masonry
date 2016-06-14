import { noView, inject, bindable } from 'aurelia-framework';
import { Masonry } from 'masonry-layout';

@inject(Element)
@noView
export class MasonryCustomAttribute {
  @bindable columnWidth;
  @bindable itemSelector;

  constructor(element) {
    // let options =
    // let mason = new Masonry(element);
    // console.log(mason);
  }

  bind() {
    console.log("Binding", this);
  }

}
