const card = document.getElementById("snippet")
const modal = document.querySelector("dialog")

 card.onclick = function() {
  modal.modalShow()
  setTimeout(timeout, 1000)
}

function timeout() {
  modal.close();
}