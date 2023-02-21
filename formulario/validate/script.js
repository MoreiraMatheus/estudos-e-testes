const form = document.querySelector('form')
const fullName = document.querySelector('#iName')
const age = document.querySelector('#iAge')
const email = document.querySelector('#iEmail')
const job = document.querySelector('#iJob')
const message = document.querySelector('#iMessage')

function submitForm(){
  console.log(`fullName: ${fullName.value}`)
  console.log(`age: ${age.value}`)
  console.log(`email: ${email.value}`)
  console.log(`job: ${job.value}`)
  console.log(`message: ${message.value}`)

  window.alert(`os dados enviados foram:
  fullName: ${fullName.value}
  age: ${age.value}
  email: ${email.value}
  job: ${job.value}
  message: ${message.value}`)
}