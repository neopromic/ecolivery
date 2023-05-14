const card = document.getElementById("snippet")
const modal = document.querySelector("dialog")

 card.onclick = function() {
  modal.showModal()
  setTimeout(timeout, 1000)
}

function timeout() {
  modal.close();
}