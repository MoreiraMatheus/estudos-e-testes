const form = document.querySelector('form')
const fullName = document.querySelector('#iName')
const age = document.querySelector('#iAge')
const email = document.querySelector('#iEmail')
const job = document.querySelector('#iJob')
const message = document.querySelector('#iMessage')
const popup = document.querySelector('dialog')
const closePopup = document.querySelector('#closePopup')
const dataP = document.querySelector('#data')

function submitForm(){
  popup.showModal()
  dataP.innerHTML = ''
  dataP.innerHTML += `fullName: ${fullName.value}</br>`
  dataP.innerHTML += `age: ${age.value}</br>`
  dataP.innerHTML += `email: ${email.value}</br>`
  dataP.innerHTML += `job: ${job.value}</br>`
  dataP.innerHTML += `message: ${message.value}</br>`
}

closePopup.onclick = () => {
  popup.close()
}