const url = 'https://fc7f2diidi.execute-api.eu-west-1.amazonaws.com/dev/claim/list'
fetch(url)
.then(response=>response.json())
.then(data=>{
  let card = document.getElementById('swipe-global-container')
  console.log(data)
  Object.keys(data.claims).forEach(claim => {
    console.log(claim + ' - ' + data.claims[claim].category) // key - value
    var display = claim==0 ? "visibility: visible" : "visibility: hidden"
    var contentCard=`<div id="swipe${data.claims[claim].claimId}" class="swipe-card" style="${display};">
                    <div class="swipe-card-header">
                    <h2 class="swipe-card-title">${data.claims[claim].title}</h2>
                    <div>Dificultad:<progress max="5" value="${data.claims[claim].priority}"></progress></div>
                    </div>
                    <h3 class="swipe-card-category">${data.claims[claim].category}</h3>
                    <div>${data.claims[claim].description}</div>
                    <div class="swipe-card-footer">
                      <button type="button" name="previous" class="swipe-card-btn">
                        <img src="images/flecha.png" alt="Anterior" class="swipe-card-previous">
                      </button>
                      <button type="button" name="next" class="swipe-card-btn">
                        <img src="images/flecha.png" alt="Siguiente" class="swipe-card-next">
                      </button>
                    </div>
                  </div>`
      card.insertAdjacentHTML('beforeend', contentCard);
  })
})
.catch(err=>console.log(err))
