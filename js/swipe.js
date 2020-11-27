function swipper(mostrar,quitar){
  var x = document.getElementById(mostrar);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById(quitar);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  localStorage.setItem("claimID", mostrar);
  console.log(localStorage.getItem("claimID"))
}

function goTo() {
  location.href = "card.html";
}

const url = 'https://fc7f2diidi.execute-api.eu-west-1.amazonaws.com/dev/claim/list'
fetch(url)
.then(response=>response.json())
.then(data=>{
  let card = document.getElementById('swipe-card-container')
  console.log(data)
  var arrayClaimsID = []
  Object.keys(data.claims).forEach(claim => {
    console.log(claim + ' - ' + data.claims[claim].category) // key - value
    arrayClaimsID.push("swipe"+data.claims[claim].claimId)
  })
  console.log(arrayClaimsID)
  Object.keys(data.claims).forEach(claim => {
    var display = claim==0 ? "display: block" : "display: none"
    if (claim==0){
      localStorage.setItem("claimID", "swipe"+data.claims[claim].claimId);
      console.log(localStorage.getItem("claimID"))
    }
    var anterior = arrayClaimsID.indexOf("swipe"+data.claims[claim].claimId)==0 ? arrayClaimsID[arrayClaimsID.length - 1] : arrayClaimsID[arrayClaimsID.indexOf("swipe"+data.claims[claim].claimId) - 1]
    var siguiente = arrayClaimsID.indexOf("swipe"+data.claims[claim].claimId)==arrayClaimsID.length - 1 ? arrayClaimsID[0] : arrayClaimsID[arrayClaimsID.indexOf("swipe"+data.claims[claim].claimId) + 1]
    var contentCard=`<div id="swipe${data.claims[claim].claimId}" class="swipe-card" style="${display};">
                    <div class="swipe-card-header">
                    <h2 class="swipe-card-title">${data.claims[claim].title}</h2>
                    <div>Dificultad:<progress max="5" value="${data.claims[claim].priority}"></progress></div>
                    </div>
                    <h3 class="swipe-card-category">${data.claims[claim].category}</h3>
                    <div>${data.claims[claim].description}</div>
                    <div class="swipe-card-footer">
                      <button type="button" name="previous" class="swipe-card-btn" title="Anterior" onclick="swipper('${anterior}','swipe${data.claims[claim].claimId}');">
                        <img src="images/flecha.png" alt="Anterior" class="reclamatch-icon swipe-card-left-arrow">
                      </button>
                      <button type="button" name="next" title="Siguiente" class="swipe-card-btn" onclick="swipper('${siguiente}','swipe${data.claims[claim].claimId}');">
                        <img src="images/flecha.png" alt="Siguiente" class="reclamatch-icon">
                      </button>
                    </div>
                  </div>`
      card.insertAdjacentHTML('beforeend', contentCard);
  })
})
.catch(err=>console.log(err))
