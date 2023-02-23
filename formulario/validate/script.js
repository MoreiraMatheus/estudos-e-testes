const form = document.querySelector('form')
const fullName = document.querySelector('#iName')
const age = document.querySelector('#iAge')
const email = document.querySelector('#iEmail')
const job = document.querySelector('#iJob')
const message = document.querySelector('#iMessage')
const popup = document.querySelector('dialog')
const closePopup = document.querySelector('#closePopup')
const dataP = document.querySelector('#data')

let jobDescription = ''

function submitForm(){
  popup.showModal()
  dataP.innerHTML = ''
  dataP.innerHTML += `fullName: ${fullName.value}</br>`
  dataP.innerHTML += `age: ${age.value}</br>`
  dataP.innerHTML += `email: ${email.value}</br>`

  switch(Number(job.value)){
    case 0:
      jobDescription = 'profissão não informada'
    break
    case 1:
      jobDescription = 'Front-end'
    break
    case 2:
      jobDescription = 'Back-end'
    break
    case 3:
      jobDescription = 'FullStack'
    break
  }
  dataP.innerHTML += `job: ${jobDescription}</br>`

  if(message.value !== ''){
    dataP.innerHTML += `message: ${message.value}</br>`
  }
}

closePopup.onclick = () => {
  popup.close()
}