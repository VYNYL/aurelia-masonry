export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-masonry')
    .plugin('aurelia-ui-virtualization');

  aurelia.start().then(a => {
    a.setRoot('app');

    System.config({
      paths: {
        '*': 'src/*'
      }
    });
  });
}
