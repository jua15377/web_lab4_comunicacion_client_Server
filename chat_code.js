var result
fetch('http://34.210.35.174:7000/')
  .then(function(response) {
    result = response.json()
    console.log(typeof result)
    return result
  })
  .then(function(myJson) {
      var msj = document.querySelector(".messages")
    myJson.forEach(function(element) {
            updateList(msj, element.text)
      })
  })

  function updateList(list, textToAdd){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(textToAdd))
    list.appendChild(li)
  }
