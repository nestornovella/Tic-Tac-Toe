const reset = document.querySelector(".reset")
const a1 = document.querySelector(".a1")
const a2 = document.querySelector(".a2")
const a3 = document.querySelector(".a3")
const b1 = document.querySelector(".b1")
const b2 = document.querySelector(".b2")
const b3 = document.querySelector(".b3")
const c1 = document.querySelector(".c1")
const c2 = document.querySelector(".c2")
const c3 = document.querySelector(".c3")
const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const p1Span = document.querySelector("#p1Span")
const p2Span = document.querySelector("#p2Span")


const buttons = Array.from(document.getElementsByTagName("button")).slice(1)

let x = true
let playerStart = true
let chances = 0

let p1Count = 0
let p2Count = 0

console.log(p1)
reset.addEventListener("click", (e) => {
    window.location.reload()
})

buttons.forEach(element => element.addEventListener('click', (e) => {
    e.preventDefault()
    if (!e.target.innerText) {
        e.target.innerText = x ? "X" : "O"
        x ? e.target.setAttribute("class", "blue") : e.target.setAttribute("class", "red")
        x = !x
        chances++
    }
    check()
}))


function turnChange() {
    if (playerStart) {
        p1Span.innerText = "X"
        p1Span.setAttribute("class", "x")
        p2Span.innerText = "O"
        p2Span.setAttribute("class", "o")
    } else if (!playerStart) {
        p1Span.innerText = "O"
        p1Span.setAttribute("class", "o")
        p2Span.innerText = "X"
        p2Span.setAttribute("class", "x")
    }
}



function point (element1){
    if (playerStart && element1.innerText === "X") {
        p1.innerText = ++p1Count
        p1Span.innerText = "O"
    }
    else if (playerStart && element1.innerText === "O") {
        p2.innerText = ++p2Count
    }
    else if (!playerStart && element1.innerText === "X") {
        p2.innerText = ++p2Count
    }
    else if (!playerStart && element1.innerText === "O") {
        p1.innerText = ++p1Count
    }
}


function verify(element1, element2, element3) {
    if (element1.innerText && element2.innerText && element3.innerText) {
        if (element1.innerText === element2.innerText && element1.innerText === element3.innerText) {
            setTimeout(() => {
                alert(element1.innerText === "X" ? "X win" : "O win")

                point(element1)
                
                buttons.forEach(e => e.innerText = "")
                x = true
                chances = 0
                playerStart = !playerStart
                turnChange()

            }, 100)

        }
    }
}


function check() {
    verify(a1, a2, a3)
    verify(b1, b2, b3)
    verify(c1, c2, c3)
    verify(a1, b1, c1)
    verify(a2, b2, c2)
    verify(a3, b3, c3)
    verify(a1, b2, c3)
    verify(a3, b2, c1)
    setTimeout(() => {
        if (chances === 9) {
            alert("Tie")
            buttons.forEach(e => e.innerText = "")
            chances = 0
            x = true
            playerStart = !playerStart
            turnChange()
        }
    }, 100)

}