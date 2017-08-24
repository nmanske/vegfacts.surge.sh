$(document).ready(function() {

  function shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  function displayFact(fact) {
    $("#fact").text(fact);
  }

  $("#health-btn").click(function() {
    var factBox = $('#factBox');

    $.getJSON('./static/data/data.json', function(data) {
      var items = data.health.map(function(item) {
        return item.id + ': ' + item.value;
      });

      shuffle(items);
      factBox.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        factBox.append(list);
      }
    });
  });

  $("#environment-btn").click(function() {

  });

  $("#ethics-btn").click(function() {

  });

});
