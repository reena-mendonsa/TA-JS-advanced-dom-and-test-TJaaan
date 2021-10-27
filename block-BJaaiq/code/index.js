var listElm = document.querySelector('#infinite-list');
  
// Add 20 items.
var loadMore = function() {
  for (var i = 0; i < quotes.length; i++) {
    var item = document.createElement('li');
    item.innerHTML = `<blockquote>${quotes[i].quoteText}</blockquote>
    <p>${quotes[i].quoteAuthor}</p>
    `
    listElm.appendChild(item);
  }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

// Initially load some items.
loadMore();

window.addEventListener('DOMContentLoaded', (event) => {
  alert('The content of the DOM is loaded');
});