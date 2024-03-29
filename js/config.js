requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: 'js/libs',
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    app: '../app',
    react: "react",
    JSXTransformer: "JSXTransformer",
    jsx: "jsx",
    jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
    reactRouter: "ReactRouter.min"
  }
});