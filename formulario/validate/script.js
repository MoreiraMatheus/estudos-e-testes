const form = document.querySelector('form')
const fullName = document.querySelector('#iName')
const age = document.querySelector('#iAge')
const email = document.querySelector('#iEmail')
const job = document.querySelector('#iJob')
const message = document.querySelector('#iMessage')
const popup = document.querySelector('dialog')
const closePopup = document.querySelector('#closePopup')

function submitForm(){
  popup.showModal()
  console.log(`fullName: ${fullName.value}`)
  console.log(`age: ${age.value}`)
  console.log(`email: ${email.value}`)
  console.log(`job: ${job.value}`)
  console.log(`message: ${message.value}`)
}

closePopup.onclick = () => {
  popup.close()
}