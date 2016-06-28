function templater(templateString, dataObj) {
  'use strict';

  var key, re;

  for (key in dataObj) {
    re = new RegExp('\\${' + key + '}', 'g'); // /\${key}/g
    templateString = templateString.replace(re, dataObj[key]);
  }

  return templateString;
}