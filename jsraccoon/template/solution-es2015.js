const template = (templateStr, data) => {
  let key, re, replaceStr;

  for (key in data) {
    re = new RegExp(`{${key}}`, 'g'); // /{key}/g
    replaceStr = Array.isArray(data[key]) ? data[key].join(', ') : data[key];
    templateStr = templateStr.replace(re, replaceStr);
  }

  return templateStr;
}
