$(document).ready(function() {

  function getRandomElement(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  function displayFact(type) {
    var factBox = $('#factBox');

    $.getJSON('./static/data/facts.json', function(data) {
      var category;
      if (type == 'Health') {
        category = data.health;
      } else if (type == 'Environment') {
        category = data.environment;
      } else if (type == 'Ethics') {
        category = data.ethics;
      }

      var facts = category.map(function(fact) {
        item = 'id: ' + fact.id + ' ///// description: ' + fact.description;
        var sources = fact.source.map(function(source) {
          item += ' ///// source name: ' + source.name + ' ///// source url: ' + source.url;
        });
        return item;
      });

      var chosen = facts[Math.floor(Math.random() * facts.length)];

      factBox.empty();

      if (facts.length) {
        var content = '<li>' + chosen + '</li>';
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
