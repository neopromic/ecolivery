const card = document.getElementById("buttonOpen")
const modal = document.querySelector("dialog")

 card.onclick = function() {
  modal.showModal()
  setTimeout(timeout, 1000)
}

function timeout() {
  modal.close();
}