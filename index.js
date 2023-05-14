const card = document.getElementById("buttonOpen")
const modal = document.querySelector("dialog")

 card.onclick = function() {
  modal.showModal();
  setTimeout(timeout, 1000);
  document.getElementById("modal").style.visibility='visible'
}

function timeout() {
  modal.close();
} 

window.onload = function() {
  document.getElementById("modal").style.visibility='hidden';
}