const btn = document.querySelector('button')
const modal = document.querySelector('dialog')
const closeBtn = document.querySelector('dialog button')

btn.onclick = ()=>{
  modal.showModal()
}

closeBtn.onclick = () =>{
  modal.close()
}