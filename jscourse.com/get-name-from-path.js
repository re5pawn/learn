function getName(path) {
  return path.split('/')
    .filter(function(p) { return !!p; })
    .pop();
}
