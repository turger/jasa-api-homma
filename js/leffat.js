function nappula() {
  document.getElementById("juttu").innerHTML = "\"Maailmassa ei ole mitään mukavampaa kuin viihtyminen eikä mikään ole helpompaa.\" – Mymmeli"
}

function hae_elokuva() {
  var haettu_leffa = document.getElementById("haettu_elokuva").value
  // AJAX-kyselystä https://www.w3schools.com/js/js_ajax_http_send.asp
  // AJAX readyState https://www.w3adda.com/ajax-tutorial/ajax-readystate
  // HTTP-vastausten statuskoodit https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var vastaus = JSON.parse(xhttp.responseText)
      console.log('vastaus:', vastaus)
      document.getElementById("elokuvan_nimi").innerHTML = vastaus.Title

      var juliste = document.getElementById('juliste')
      juliste.setAttribute("alt", "Elokuvan juliste")
      juliste.src = vastaus.Poster
    }
  }
  xhttp.open("GET", "http://www.omdbapi.com/?apikey=a95f3723&t=" + haettu_leffa, true)
  xhttp.send()
}
