$(document).ready(function() {

  function displayFact(type) {
    $.getJSON('./static/data/facts.json', function(data) {

      let category = (type == 'Health') ? data.health :
        (type == 'Environment') ? data.environment :
        data.ethics

      let fact = category[Math.floor(Math.random() * category.length)]

      let content = '<br>' + fact.description + '<br>'
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
