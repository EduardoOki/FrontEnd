let hamburguer = document.getElementById("menu-hamburguer")
let nav = document.getElementById("navgation")
let exit = document.getElementById("exit")
let filterBlack = document.querySelector(".filterBlack")

hamburguer.addEventListener("click", () => {
  nav.style.transform = "translateX(0)"
  filterBlack.style.display = "block"
})
exit.addEventListener("click", () => {
  nav.style.transform = "translateX(-100vw)"
  filterBlack.style.display = "none"
})