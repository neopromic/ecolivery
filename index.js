const card = document.getElementById("snippet")
const modal = document.getElementById("dialog")

 card.onclick = function() {
  dialog.modalShow()
  setTimeout(timeout, 1000)
}

function timeout() {
  dialog.close()
}