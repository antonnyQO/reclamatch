const url = 'https://fc7f2diidi.execute-api.eu-west-1.amazonaws.com/dev/claim/list'
fetch(url)
.then(response=>response.json())
.then(data=>{
  let card = document.getElementById('card-data-container')
  console.log(data)
  var arrayClaimsID = []
  Object.keys(data.claims).forEach(claim => {
    console.log(claim + ' - ' + data.claims[claim].claimId) // key - value
    console.log(localStorage.getItem("claimID"))
    if(localStorage.getItem("claimID")=="swipe"+data.claims[claim].claimId){
      console.log("match")
      var contentCard=`<div class="card-header">
        <h1 class="card-title">${data.claims[claim].title}</h1>
        <div>Dificultad:<progress max="5" value="${data.claims[claim].priority}"></progress></div>
      </div>

      <div id="cliente" class="card-info-client">
        <div class="card-info-client-name">
          <label for="nombreCliente">Cliente:</label>
          <input class="card-input-name" type="text" id="nombreCliente" name="nombreCliente" value="${data.claims[claim].client.name}" readonly>
        </div>
        <div class="card-info-client-phone">
          <label for="nombreCliente">Tel&eacute;fono Contacto:</label>
          <input class="card-input-phone" type="text" id="telefonoCliente" name="telefonoCliente" value="${data.claims[claim].client.phoneNumber}" readonly>
        </div>
        <div class="card-info-client-dni">
          <label for="dniCliente">DNI:</label>
          <input class="card-input-dni" type="text" id="dniCliente" name="dniCliente" value="${data.claims[claim].client.dni}" readonly>
        </div>
        <div class="card-info-client-contract">
          <label for="numContrato">N&uacute;mero Contrato:</label>
          <input class="card-input-contract" type="text" id="numContrato" name="numContrato" value="${data.claims[claim].client.serviceId}" readonly>
        </div>
      </div>
      <div id="reclamacion" class="card-info-claim">
        <div class="card-info-claim-category">
          <label for="categoriaEspecialidad">Categor&iacute;a:</label>
          <input class="card-input-contract" type="text" id="categoriaEspecialidad" name="categoriaEspecialidad" value="${data.claims[claim].category}" readonly>
        </div>
        <label for="textoReclamacion">Reclamaci&oacute;n:</label>
        <textarea class="card-text-claim" name="textoReclamacion" readonly>${data.claims[claim].description}</textarea>
      </div>`
      card.insertAdjacentHTML('beforeend', contentCard);
    }
  })
})
.catch(err=>console.log(err))
