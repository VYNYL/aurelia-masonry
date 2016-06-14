export class App {

  constructor() {
    this.cats = [];
    for (let i = 0; i < 50; i++) {
      let width = Math.floor((Math.random() * 149) + 50);
      let height = Math.floor((Math.random() * 450) + 50);
      this.cats.push({
        src: `http://placekitten.com/${width}/${height}`,
        width: width,
        height: height
      });
    }
    console.log(this.cats);
    this.gridItems = [];
    this.gridItemsConf = [];
    // this._masonry = this.masonry.au.masonry.viewModel;
  }

  randomCat(idx) {

  }

  attached() {
  }

  imageLoaded(idx) {
    // console.log(this.masonry.au.masonry.viewModel.masonry);
    this.masonry.au.masonry.viewModel.masonry.addItems(this.gridItems[idx]);
    this.masonry.au.masonry.viewModel.layout();
  }

}
