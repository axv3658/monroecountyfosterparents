// Directory URLs on hosting; explicit index files for direct local browsing.
if (window.location.protocol === 'file:') {
  document.querySelectorAll('a[href]').forEach(function (link) {
    var url = new URL(link.getAttribute('href'), window.location.href);
    if (url.protocol === 'file:' && url.pathname.endsWith('/')) {
      url.pathname += 'index.html';
      link.href = url.href;
    }
  });
}
