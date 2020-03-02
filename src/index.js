module.exports = function reverse (n) {
  if (typeof n !== 'string') {
    n =''+n;
  }
  let regExp = /[\d]{1,}/g;
  let validStr = n.match(regExp)[0];
  return +(validStr.split('').reverse().join(''));
};
