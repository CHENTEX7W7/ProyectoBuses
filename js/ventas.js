const data = {
  "La Paz":[
    {id:"LP1",from:"Quijarro - La Paz",to:"La Paz Central",time:"06:30",priceBase:40,type:"Ejecutivo",desc:"Servicio ejecutivo, snacks incluidos",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"LP2",from:"La Paz Express",to:"El Alto",time:"07:00",priceBase:35,type:"SemiCama",desc:"Asientos cómodos",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"LP3",from:"Altiplano Rápido",to:"La Paz Sur",time:"07:30",priceBase:38,type:"Cama",desc:"Cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"LP4",from:"La Paz Urbano",to:"Copacabana",time:"08:00",priceBase:45,type:"Ejecutivo",desc:"Servicio completo con refrigerio",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"LP5",from:"La Paz Plus",to:"El Alto",time:"08:30",priceBase:36,type:"SemiCama",desc:"Asientos confortables",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"LP6",from:"La Paz Rapid",to:"La Paz Norte",time:"09:00",priceBase:42,type:"Ejecutivo",desc:"Servicio ejecutivo premium",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"LP7",from:"La Paz Line",to:"Copacabana",time:"09:30",priceBase:39,type:"Cama",desc:"Servicio con refrigerio",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"LP8",from:"La Paz Express",to:"El Alto",time:"10:00",priceBase:35,type:"SemiCama",desc:"Trayecto rápido",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"LP9",from:"Altiplano Rápido",to:"La Paz Sur",time:"10:30",priceBase:38,type:"Cama",desc:"Cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"LP10",from:"La Paz Urbano",to:"La Paz Central",time:"11:00",priceBase:40,type:"Ejecutivo",desc:"Servicio ejecutivo",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"}
  ],
  "Oruro":[
    {id:"OR1",from:"Quijarro - Oruro",to:"Terminal Oruro",time:"06:30",priceBase:30,type:"SemiCama",desc:"Trayecto corto, servicio básico",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"OR2",from:"Oruro Rapid",to:"Caracollo",time:"07:00",priceBase:32,type:"Ejecutivo",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus2.png"},
    {id:"OR3",from:"Oruro Line",to:"Oruro Centro",time:"07:30",priceBase:28,type:"SemiCama",desc:"Servicio básico",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"OR4",from:"Altiplano Express",to:"Sajama",time:"08:00",priceBase:35,type:"Cama",desc:"Servicio con refrigerio",seatsLayout:{rows:7,cols:4},img:"../img/bus2.png"},
    {id:"OR5",from:"Oruro Plus",to:"Caracollo",time:"08:30",priceBase:32,type:"Ejecutivo",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"OR6",from:"Oruro Rapid",to:"Oruro Centro",time:"09:00",priceBase:28,type:"SemiCama",desc:"Servicio básico",seatsLayout:{rows:7,cols:4},img:"../img/bus2.png"},
    {id:"OR7",from:"Oruro Line",to:"Sajama",time:"09:30",priceBase:35,type:"Cama",desc:"Servicio con refrigerio",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"OR8",from:"Altiplano Express",to:"Caracollo",time:"10:00",priceBase:32,type:"Ejecutivo",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus2.png"},
    {id:"OR9",from:"Oruro Plus",to:"Oruro Centro",time:"10:30",priceBase:28,type:"SemiCama",desc:"Servicio básico",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"OR10",from:"Oruro Rapid",to:"Sajama",time:"11:00",priceBase:35,type:"Cama",desc:"Servicio completo",seatsLayout:{rows:7,cols:4},img:"../img/bus2.png"}
  ],
  "Potosí":[
    {id:"PT1",from:"Potosí Line",to:"Potosí Central",time:"06:00",priceBase:38,type:"Ejecutivo",desc:"Servicio ejecutivo con wifi",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"PT2",from:"Potosí Express",to:"Villa Imperial",time:"06:45",priceBase:35,type:"SemiCama",desc:"Servicio semi cama",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"PT3",from:"Potosí Rapid",to:"Potosí Centro",time:"07:30",priceBase:40,type:"Cama",desc:"Servicio cama con refrigerio",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"PT4",from:"Potosí Urbano",to:"Villa Imperial",time:"08:15",priceBase:35,type:"Ejecutivo",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"PT5",from:"Potosí Plus",to:"Potosí Centro",time:"09:00",priceBase:38,type:"Cama",desc:"Servicio completo",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"PT6",from:"Potosí Line",to:"Villa Imperial",time:"09:45",priceBase:35,type:"SemiCama",desc:"Servicio semi cama",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"PT7",from:"Potosí Rapid",to:"Potosí Centro",time:"10:30",priceBase:40,type:"Ejecutivo",desc:"Servicio ejecutivo",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"PT8",from:"Potosí Urbano",to:"Villa Imperial",time:"11:15",priceBase:35,type:"SemiCama",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"PT9",from:"Potosí Plus",to:"Potosí Centro",time:"12:00",priceBase:38,type:"Cama",desc:"Servicio completo",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"PT10",from:"Potosí Line",to:"Villa Imperial",time:"12:45",priceBase:35,type:"Ejecutivo",desc:"Servicio ejecutivo",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"}
  ],
  "Chuquisaca":[
    {id:"CH1",from:"Sucre Line",to:"Sucre Central",time:"06:30",priceBase:33,type:"Cama",desc:"Cama completa para mayor confort",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"CH2",from:"Sucre Rapid",to:"Azurduy",time:"07:15",priceBase:30,type:"SemiCama",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"CH3",from:"Sucre Express",to:"Sucre Centro",time:"08:00",priceBase:35,type:"Ejecutivo",desc:"Servicio ejecutivo",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"CH4",from:"Sucre Urbano",to:"Azurduy",time:"08:45",priceBase:32,type:"Cama",desc:"Cama confort",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"CH5",from:"Sucre Plus",to:"Sucre Central",time:"09:30",priceBase:33,type:"Cama",desc:"Servicio completo",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"CH6",from:"Sucre Line",to:"Azurduy",time:"10:15",priceBase:30,type:"SemiCama",desc:"Servicio básico",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"CH7",from:"Sucre Rapid",to:"Sucre Central",time:"11:00",priceBase:35,type:"Ejecutivo",desc:"Servicio ejecutivo",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"CH8",from:"Sucre Express",to:"Azurduy",time:"11:45",priceBase:32,type:"Cama",desc:"Servicio completo",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"CH9",from:"Sucre Urbano",to:"Sucre Central",time:"12:30",priceBase:33,type:"Cama",desc:"Cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"CH10",from:"Sucre Plus",to:"Azurduy",time:"13:15",priceBase:30,type:"SemiCama",desc:"Asientos básicos",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"}
  ],
  "Cochabamba":[
    {id:"CB1",from:"Cochabamba Line",to:"Cochabamba Central",time:"06:00",priceBase:36,type:"Ejecutivo",desc:"Servicio ejecutivo y refrigerio",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"CB2",from:"Cochabamba Rapid",to:"Sacaba",time:"06:45",priceBase:34,type:"SemiCama",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"CB3",from:"Cochabamba Express",to:"Cochabamba Norte",time:"07:30",priceBase:38,type:"Cama",desc:"Servicio cama",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"CB4",from:"Cochabamba Urbano",to:"Sacaba",time:"08:15",priceBase:36,type:"Ejecutivo",desc:"Servicio completo",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"CB5",from:"Cochabamba Plus",to:"Cochabamba Central",time:"09:00",priceBase:37,type:"Cama",desc:"Cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"CB6",from:"Cochabamba Line",to:"Sacaba",time:"09:45",priceBase:34,type:"SemiCama",desc:"Servicio básico",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"CB7",from:"Cochabamba Rapid",to:"Cochabamba Norte",time:"10:30",priceBase:38,type:"Cama",desc:"Servicio cama con refrigerio",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"CB8",from:"Cochabamba Express",to:"Sacaba",time:"11:15",priceBase:36,type:"Ejecutivo",desc:"Servicio ejecutivo",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"CB9",from:"Cochabamba Urbano",to:"Cochabamba Central",time:"12:00",priceBase:37,type:"Cama",desc:"Cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"CB10",from:"Cochabamba Plus",to:"Sacaba",time:"12:45",priceBase:34,type:"SemiCama",desc:"Asientos básicos",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"}
  ],
  "Tarija":[
    {id:"TJ1",from:"Tarija Sur",to:"Terminal Tarija",time:"06:30",priceBase:32,type:"SemiCama",desc:"Viaje cómodo al valle",seatsLayout:{rows:7,cols:4},img:"../img/bus2.png"},
    {id:"TJ2",from:"Tarija Rapid",to:"Padcaya",time:"07:15",priceBase:34,type:"Ejecutivo",desc:"Servicio ejecutivo",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"TJ3",from:"Tarija Express",to:"Terminal Tarija",time:"08:00",priceBase:33,type:"Cama",desc:"Servicio cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"TJ4",from:"Tarija Urbano",to:"Padcaya",time:"08:45",priceBase:32,type:"SemiCama",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"TJ5",from:"Tarija Plus",to:"Terminal Tarija",time:"09:30",priceBase:34,type:"Ejecutivo",desc:"Servicio completo",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"TJ6",from:"Tarija Sur",to:"Padcaya",time:"10:15",priceBase:32,type:"SemiCama",desc:"Asientos básicos",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"TJ7",from:"Tarija Rapid",to:"Terminal Tarija",time:"11:00",priceBase:34,type:"Ejecutivo",desc:"Servicio ejecutivo",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"TJ8",from:"Tarija Express",to:"Padcaya",time:"11:45",priceBase:33,type:"Cama",desc:"Cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"TJ9",from:"Tarija Urbano",to:"Terminal Tarija",time:"12:30",priceBase:32,type:"SemiCama",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus2.png"},
    {id:"TJ10",from:"Tarija Plus",to:"Padcaya",time:"13:15",priceBase:34,type:"Ejecutivo",desc:"Servicio completo",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"}
  ],
  "Santa Cruz":[
    {id:"SC1",from:"Santa Cruz Central",to:"Terminal SC",time:"05:30",priceBase:45,type:"Ejecutivo",desc:"Servicio ejecutivo largo recorrido",seatsLayout:{rows:9,cols:4},img:"../img/bus2.png"},
    {id:"SC2",from:"Santa Cruz Económico",to:"Terminal SC",time:"06:15",priceBase:28,type:"Económico",desc:"Opción económica nocturna",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"SC3",from:"Santa Cruz Rapid",to:"El Carmen",time:"07:00",priceBase:38,type:"Cama",desc:"Servicio cama",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"SC4",from:"Santa Cruz Express",to:"Terminal SC",time:"07:45",priceBase:42,type:"Ejecutivo",desc:"Servicio premium",seatsLayout:{rows:9,cols:4},img:"../img/bus1.png"},
    {id:"SC5",from:"Santa Cruz Urbano",to:"El Carmen",time:"08:30",priceBase:40,type:"Cama",desc:"Asientos cómodos",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"SC6",from:"Santa Cruz Line",to:"Terminal SC",time:"09:15",priceBase:45,type:"Ejecutivo",desc:"Servicio completo",seatsLayout:{rows:9,cols:4},img:"../img/bus1.png"},
    {id:"SC7",from:"Santa Cruz Plus",to:"El Carmen",time:"10:00",priceBase:38,type:"Cama",desc:"Cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"SC8",from:"Santa Cruz Rapid",to:"Terminal SC",time:"10:45",priceBase:42,type:"Ejecutivo",desc:"Servicio premium",seatsLayout:{rows:9,cols:4},img:"../img/bus1.png"},
    {id:"SC9",from:"Santa Cruz Express",to:"El Carmen",time:"11:30",priceBase:40,type:"Cama",desc:"Asientos cómodos",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"SC10",from:"Santa Cruz Urbano",to:"Terminal SC",time:"12:15",priceBase:45,type:"Ejecutivo",desc:"Servicio completo",seatsLayout:{rows:9,cols:4},img:"../img/bus1.png"}
  ],
  "Beni":[
    {id:"BN1",from:"Beni Line",to:"Trinidad Central",time:"06:00",priceBase:34,type:"SemiCama",desc:"Ruta al llano",seatsLayout:{rows:7,cols:4},img:"../img/bus2.png"},
    {id:"BN2",from:"Beni Rapid",to:"Guayaramerín",time:"06:45",priceBase:36,type:"Ejecutivo",desc:"Servicio ejecutivo",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"BN3",from:"Beni Express",to:"Trinidad Central",time:"07:30",priceBase:35,type:"Cama",desc:"Servicio cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"BN4",from:"Beni Urbano",to:"Guayaramerín",time:"08:15",priceBase:34,type:"SemiCama",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"BN5",from:"Beni Plus",to:"Trinidad Central",time:"09:00",priceBase:36,type:"Ejecutivo",desc:"Servicio completo",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"BN6",from:"Beni Line",to:"Guayaramerín",time:"09:45",priceBase:34,type:"SemiCama",desc:"Servicio básico",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"BN7",from:"Beni Rapid",to:"Trinidad Central",time:"10:30",priceBase:36,type:"Ejecutivo",desc:"Servicio ejecutivo",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"BN8",from:"Beni Express",to:"Guayaramerín",time:"11:15",priceBase:35,type:"Cama",desc:"Cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"BN9",from:"Beni Urbano",to:"Trinidad Central",time:"12:00",priceBase:34,type:"SemiCama",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus2.png"},
    {id:"BN10",from:"Beni Plus",to:"Guayaramerín",time:"12:45",priceBase:36,type:"Ejecutivo",desc:"Servicio completo",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"}
  ],
  "Pando":[
    {id:"PD1",from:"Pando Express",to:"Cobija",time:"06:30",priceBase:37,type:"Cama",desc:"Servicio nocturno con cama",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"PD2",from:"Pando Rapid",to:"Porvenir",time:"07:15",priceBase:35,type:"SemiCama",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"PD3",from:"Pando Line",to:"Cobija",time:"08:00",priceBase:38,type:"Ejecutivo",desc:"Servicio ejecutivo",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"PD4",from:"Pando Express",to:"Porvenir",time:"08:45",priceBase:37,type:"Cama",desc:"Cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"PD5",from:"Pando Rapid",to:"Cobija",time:"09:30",priceBase:35,type:"SemiCama",desc:"Servicio básico",seatsLayout:{rows:7,cols:4},img:"../img/bus2.png"},
    {id:"PD6",from:"Pando Line",to:"Porvenir",time:"10:15",priceBase:38,type:"Ejecutivo",desc:"Servicio ejecutivo",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"},
    {id:"PD7",from:"Pando Express",to:"Cobija",time:"11:00",priceBase:37,type:"Cama",desc:"Cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"PD8",from:"Pando Rapid",to:"Porvenir",time:"11:45",priceBase:35,type:"SemiCama",desc:"Asientos cómodos",seatsLayout:{rows:7,cols:4},img:"../img/bus1.png"},
    {id:"PD9",from:"Pando Line",to:"Cobija",time:"12:30",priceBase:38,type:"Ejecutivo",desc:"Servicio completo",seatsLayout:{rows:8,cols:4},img:"../img/bus2.png"},
    {id:"PD10",from:"Pando Express",to:"Porvenir",time:"13:15",priceBase:37,type:"Cama",desc:"Cama confortable",seatsLayout:{rows:8,cols:4},img:"../img/bus1.png"}
  ]
}

const cityRegions={"La Paz":"Altiplano","Oruro":"Altiplano"}
const tabs=document.querySelectorAll('.tab')
const tripsContainer=document.getElementById('trips-container')
const cityTitle=document.getElementById('city-title')
const cityDesc=document.getElementById('city-desc')
const seatPanel=document.getElementById('seat-panel')
const closePanel=document.getElementById('close-panel')
const seatsGrid=document.getElementById('seats-grid')
const panelRoute=document.getElementById('panel-route')
const panelType=document.getElementById('panel-type')
const panelSchedule=document.getElementById('panel-schedule')
const panelDesc=document.getElementById('panel-desc')
const panelBus=document.getElementById('panel-bus')
const selectedCountEl=document.getElementById('selected-count')
const selectedTotalEl=document.getElementById('selected-total')
const btnPay=document.getElementById('btn-pay')
const btnCancel=document.getElementById('btn-cancel')
const toast=document.getElementById('toast')
const themeToggle=document.getElementById('theme-toggle')
const logoutBtn=document.getElementById('logout-btn')
const confirmModal=document.getElementById('confirm-modal')
const confirmYes=document.getElementById('confirm-yes')
const confirmNo=document.getElementById('confirm-no')

let currentCity='La Paz',currentTrip=null,seatsState={},selectedSeats=new Set()

themeToggle.onclick=function(){
  document.body.dataset.theme=document.body.dataset.theme==='dark'?'light':'dark'
  themeToggle.textContent=document.body.dataset.theme==='dark'?'🌙':'☀️'
}

logoutBtn.onclick=function(){window.location.href='index.html'}

tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'))
    tab.classList.add('active')
    currentCity=tab.dataset.city
    renderTrips()
  })
})

function renderTrips(){
  tripsContainer.innerHTML=''
  cityTitle.textContent=`${currentCity} — ${cityRegions[currentCity]}`
  cityDesc.textContent=`Selecciona un viaje y elige tus asientos.`
  data[currentCity].forEach(trip=>{
    const card=document.createElement('div')
    card.className='trip-card'
    card.innerHTML=`
      <div class="trip-top">
        <div class="bus-thumb"><img src="${trip.img}" alt="${trip.from}"></div>
        <div class="trip-meta">
          <h3>${trip.from} → ${trip.to}</h3>
          <p>${trip.type}</p>
          <p>Hora: ${trip.time}</p>
          <p>${trip.desc}</p>
        </div>
      </div>
      <div class="trip-foot">
        <div class="price">Bs. ${trip.priceBase}</div>
        <button class="btn btn-outline" data-trip="${trip.id}">Seleccionar asientos</button>
      </div>
    `
    tripsContainer.appendChild(card)
  })
  document.querySelectorAll('.btn-outline').forEach(btn=>{btn.onclick=()=>openSeatPanel(btn.dataset.trip)})
}

function openSeatPanel(tripId){
  currentTrip=data[currentCity].find(t=>t.id===tripId)
  if(!currentTrip.seatsState) currentTrip.seatsState={}
  seatsState=currentTrip.seatsState
  selectedSeats.clear()
  panelRoute.textContent=`${currentTrip.from} → ${currentTrip.to}`
  panelType.textContent=currentTrip.type
  panelSchedule.textContent=`Hora: ${currentTrip.time}`
  panelDesc.textContent=currentTrip.desc
  panelBus.src=currentTrip.img
  seatsGrid.innerHTML=''
  const rows=currentTrip.seatsLayout.rows,cols=currentTrip.seatsLayout.cols
  let seatNumber=1
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      const seat=document.createElement('div')
      seat.dataset.id=`${r}-${c}`
      if(!seatsState[seat.dataset.id]) seatsState[seat.dataset.id]='available'
      seat.className='seat '+seatsState[seat.dataset.id]
      seat.textContent=seatNumber++
      seat.onclick=()=>toggleSeat(seat)
      seatsGrid.appendChild(seat)
    }
  }
  updateSeatInfo()
  seatPanel.classList.remove('hidden')
}

function toggleSeat(seat){
  const id=seat.dataset.id
  if(seatsState[id]==='occupied') return
  if(seatsState[id]==='available'){
    seatsState[id]='selected'
    selectedSeats.add(id)
    seat.className='seat selected'
  }else{
    seatsState[id]='available'
    selectedSeats.delete(id)
    seat.className='seat available'
  }
  updateSeatInfo()
}

function updateSeatInfo(){
  selectedCountEl.textContent=selectedSeats.size
  selectedTotalEl.textContent=`Bs. ${selectedSeats.size*currentTrip.priceBase}`
}

closePanel.onclick=()=>seatPanel.classList.add('hidden')
btnCancel.onclick=()=>seatPanel.classList.add('hidden')
btnPay.onclick=()=>confirmModal.classList.remove('hidden')
confirmYes.onclick=()=>{
  selectedSeats.forEach(id=>seatsState[id]='occupied')
  seatPanel.classList.add('hidden')
  confirmModal.classList.add('hidden')
  showToast(`Compra exitosa. Asientos: ${selectedSeats.size}`)
}
confirmNo.onclick=()=>confirmModal.classList.add('hidden')

function showToast(msg){
  toast.textContent=msg
  toast.classList.remove('hidden')
  setTimeout(()=>toast.classList.add('hidden'),3000)
}

renderTrips()
