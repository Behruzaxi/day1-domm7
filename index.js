
let inp = document.querySelector(".inp")
let a = document.querySelector("#A")
let b = document.querySelector("#B")
let c = document.querySelector("#C")
let d = document.querySelector("#D")
let e = document.querySelector("#E")
let f = document.querySelector("#F")

let = document.querySelector(".X")








a.onclick = () => {
    let inpvalue = inp.value
    let.innerHTML = inpvalue.toUpperCase()
    content.classList.toggle("active")
}

b.onclick = () => {
    let inpvalue = inp.value
    let.innerHTML = inpvalue.toLowerCase()
}
c.onclick = () => {
    let inpvalue = inp.value
    let.innerHTML = inpvalue.slice(0, 1).toUpperCase()
    let.innerHTML += inpvalue.slice(1).toLowerCase()
}

d.onclick = () => {
    let inpvalue = inp.value
    let.innerHTML = inpvalue.bold()
}
e.onclick = () => {
    let inpvalue = inp.value
    let.innerHTML = inpvalue.italics()
}

f.onclick = () => {
    let inpvalue = inp.value
    let.style.textDecoration = "underline"
    let.innerHTML = inpvalue.toUpperCase().bold().italics()
}

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