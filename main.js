$(document).ready(function() {

  function displayFact(type) {
    $.getJSON('./static/data/facts.json', function(data) {

      let fact = (type == 'Health') ? data.health[Math.floor(Math.random() * data.health.length)] :
        (type == 'Environment') ? data.environment[Math.floor(Math.random() * data.environment.length)] :
        data.ethics[Math.floor(Math.random() * data.ethics.length)]

      let content = fact.description;
      for (let i = 0; i < fact.source.length; i++)
        content += '<br>Source: <a href="' + fact.source[i].url + '">' + fact.source[i].name + '</a>'

      $('#factBox').empty()
      $('#factBox').append(content)

    })
  }

  $('#health-btn').click(function() {
    displayFact('Health')
  })

  $('#environment-btn').click(function() {
    displayFact('Environment')
  })

  $('#ethics-btn').click(function() {
    displayFact('Ethics')
  })

})
