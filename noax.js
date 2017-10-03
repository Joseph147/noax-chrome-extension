var url = location.href;

$.getJSON('http://noax.dev/api/count/' + encodeURIComponent(url),
  function(data) {
    if (data.block) {
      alert('This page has been reported ' + data.count + ' times.')
    }
  });
