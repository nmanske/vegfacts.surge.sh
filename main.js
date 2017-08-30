$(document).ready(function() {

  function getRandomElement(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  function displayFact(type) {
    let factBox = $('#factBox');

    $.getJSON('./static/data/facts.json', function(data) {
      let category = (type == 'Health') ? data.health :
        (type == 'Environment') ? data.environment :
        data.ethics;

      let facts = category.map(function(fact) {
        let item = {
          'content': fact.description
        };
        let sources = fact.source.map(function(source) {
          item['source'] = source.name;
          item['url'] = source.url;
        });
        return item;
      });

      let chosen = facts[Math.floor(Math.random() * facts.length)];

      factBox.empty();

      let content = chosen['content'] + '<br>Source: <a href="' + chosen['url'] + '">' + chosen['source'] + '</a>';
      factBox.append(content);
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
