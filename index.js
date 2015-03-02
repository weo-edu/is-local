module.exports = function(url) {
  return ! /^(?:[a-z]+\:)?\/\//i.test(url);
};