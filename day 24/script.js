let a = document.querySelector("select")
let i = document.querySelector("input")
let b = document.querySelector("button")

let gravity = {
    "9.807" : "earth"
}

b.addEventListener("click", (e) => {
    // console.log(txt)
    console.log(a.value * i.value)
    switch (a.value) {
        case "9.807":
            document.getElementById("division").innerHTML = ""
            let q = document.createElement("img")
            q.src = "assets/earth.jpg"
            let txt =`the weight of yje object on ${a.value}`
            document.getElementById("division").appendChild(q)
            console.log(txt)
            break;
        case "1.62":
            document.getElementById("division").innerHTML = ""
            let w = document.createElement("img")
            w.src = "assets/moon.jpg"
            document.getElementById("division").appendChild(w)
            break;
        case "3.71":
            document.getElementById("division").innerHTML = ""
            let e = document.createElement("img")
            e.src = "assets/mars.jpg"
            document.getElementById("division").appendChild(e)
            break;
        case "3.7":
            document.getElementById("division").innerHTML = ""
            let r = document.createElement("img")
            r.src = "assets/mercury.jpg"
            document.getElementById("division").appendChild(r)
            break;
        case "24.79":
            document.getElementById("division").innerHTML = ""
            let t = document.createElement("img")
            t.src = "assets/jupiter.jpg"
            document.getElementById("division").appendChild(t)
            break;
        case "11.15":
            document.getElementById("division").innerHTML = ""
            let y = document.createElement("img")
            y.src = "assets/neptune.jpg"
            document.getElementById("division").appendChild(y)
            break;
        case "8.87":
            document.getElementById("division").innerHTML = ""
            let u = document.createElement("img")
            u.src = "assets/uranus.jpg"
            document.getElementById("division").appendChild(u)
            break;
        case "0.62":
            document.getElementById("division").innerHTML = ""
            let o = document.createElement("img")
            o.src = "assets/pluto.jpg"
            document.getElementById("division").appendChild(o)
            break;
        case "8.87":
            document.getElementById("division").innerHTML = ""
            let p = document.createElement("img")
            p.src = "assets/venus.jpg"
            document.getElementById("division").appendChild(p)
            break;


        default:
            break;
    }
})

