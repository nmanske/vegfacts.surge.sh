$(document).ready(function() {

  function getRandomElement(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  function displayFact(type) {
    var factBox = $('#factBox');

    $.getJSON('./static/data/data.json', function(data) {
      var category;
      if (type == 'Health') {
        category = data.health;
      } else if (type == 'Environment') {
        category = data.environment;
      } else if (type == 'Ethics') {
        category = data.ethics;
      }

      var items = category.map(function(item) {
        return item.id + ': ' + item.value;
      });

      var fact = items[Math.floor(Math.random() * items.length)];
      factBox.empty();

      if (items.length) {
        var content = '<li>' + fact + '</li>';
        var list = $('<ul />').html(content);
        factBox.append(list);
      }
    });
  }

  $('#health-btn').click(function() {
    displayFact('Health');
  });

  $('#environment-btn').click(function() {
    displayFact('Environment');
  });

  $('#ethics-btn').click(function() {
    displayFact('Ethics');
  });

});
