export class App {

  randomCat() {
    let width = Math.floor((Math.random() * 149) + 50);
    let height = Math.floor((Math.random() * 450) + 50);
    return `http://placekitten.com/${width}/${height}`;
  }

}
