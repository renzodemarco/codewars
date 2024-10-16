// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// My Solution:

function removeUrlAnchor(url) {
  const index = url.split('').indexOf('#')
  return index === -1 ? url : url.slice(0, index)
}