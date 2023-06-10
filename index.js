
let click = document.querySelector(".click-btn")
let click2 = document.querySelector(".click-btn2")
let navbar = document.querySelector("nav")

click.onclick = () => {
    let card = document.querySelector(".card1")
    card.style.transformOrigin = "0 50%"
    card.style.transform = "perspective(1000px) rotateY(15deg)"
    card.style.width = "80%"
    click.style.display = "none"
    click2.style.display = "block"
    navbar.style.transform = "translateX(0)"
}
click2.onclick = () => {
    let card = document.querySelector(".card1")
    card.style.transform = "none"
    card.style.width = "100%"
    click.style.display = "block"
    click2.style.display = "none"
    navbar.style.transform = "translateX(-100%)"
}