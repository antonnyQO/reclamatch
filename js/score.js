const url = 'https://fc7f2diidi.execute-api.eu-west-1.amazonaws.com/dev/claim/list'
fetch(url)
.then(response=>response.json())
.then(data=>{
  let card = document.getElementById('score-data-container')
  console.log(data)
  var arrayClaimsID = []
  Object.keys(data.claims).forEach(claim => {
    console.log(claim + ' - ' + data.claims[claim].claimId) // key - value
    console.log(localStorage.getItem("claimID"))
    if(localStorage.getItem("claimID")=="swipe"+data.claims[claim].claimId){
      console.log("match")
      var contentCard=`<h1>¡Enhorabuena, has resuelto la tarea!</h1>
      <div class="score-rating-container">
        <h2 class="score-rating-title">${data.claims[claim].title}</h2>
        <div>Dificultad:<progress max="5" value="${data.claims[claim].priority}"></progress></div>
      </div>`
      card.insertAdjacentHTML('beforeend', contentCard);
    }
  })
})
.catch(err=>console.log(err))
