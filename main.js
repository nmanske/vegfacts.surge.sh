$(document).ready(function() {

  function getRandomElement(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  function displayFact(type) {

    $.getJSON('./static/data/facts.json', function(data) {
      let chosen = data[Math.floor(Math.random()*data.length)];

      let fact = (type == 'Health') ? data.health[Math.floor(Math.random()*data.health.length)] :
        (type == 'Environment') ? data.environment[Math.floor(Math.random()*data.environment.length)] :
        data.ethics[Math.floor(Math.random()*data.ethics.length)];

      let content = fact.description + '<br>Source: <a href="' + fact.url + '">' + fact.source + '</a>';
      $('#factBox').empty();
      $('#factBox').append(content);
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
