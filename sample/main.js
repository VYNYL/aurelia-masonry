export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-masonry');

  aurelia.start().then(a => {
    a.setRoot('app');

    System.config({
      paths: {
        '*': 'src/*'
      }
    });
  });
}
