;( function () {// get the sticky element with the id of `sticky-header`.
var stickyHeader = document.getElementById('sticky-header');

// then record the current position, so when we cross the
// boundary the `sticky` class can be toggled
var boundary = stickyHeader.offsetHeight;

// when the page scrolls, do as little as possible, in this
// case we're just registering a rAF callback to `checkSticky`
window.onscroll = function (event) {
  requestAnimationFrame(checkSticky);
};

function checkSticky() {
  // collect current scroll position, with a arbitrary amount
  // of inertia.
  var y = window.scrollY + 2;

  // check if the element contains the `sticky` class already
  var isSticky = document.body.classList.contains('sticky');
  if (y > boundary) {
    // if we're in the "sticky" boundary, and it's not already
    // sticky, then apply the class, otherwise do nothing.
    if (!isSticky) {
      document.body.classList.add('sticky');
    }
  } else if (isSticky) {
    // otherwise, we're inside the region *and* the sticky
    // class needs to be removed.
    document.body.classList.remove('sticky');
  }
}
})();