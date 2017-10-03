var url = location.href;
var protocol = url.split("/")[0];

$.getJSON(protocol + '//noax.dev/api/count/' + encodeURIComponent(url),
  function(data) {
    if (data.block || data.flagged) {
      alert('This page has been reported ' + data.count + ' times.')
    }
  });
