// console.log(document);
const myDiv = document.getElementById("myDiv")
myDiv.innerHTML = "<h1>Hello JS</h1>"
myDiv.style.color = "red"
myDiv.style.backgroundColor = "yellow"

const myClass = document.getElementsByClassName("myClass")[0]
myClass.innerText = "This is class text"
myClass.style.cssText = `
    color: blue;
    background-color: lightpink;
    font-size: 24px;
    padding: 20px;
    margin-bottom: 10px;
    width: max-content
`

const p1 = document.getElementsByTagName("p")[0]
p1.textContent = "This is a paragraph tag"
p1.classList.add("joy")
p1.classList.remove("voy")
// p1.classList.toggle("choy")


const myClass1 = document.querySelectorAll(".myClass")[1]
myClass1.textContent = "This is also a class text"
myClass1.classList.add("abul", "babul", "kabul", "bulbul")
myClass1.classList.remove("abul", "bulbul")
myClass1.classList = "kamla jamal tamal akmal mal"

const chiPlusPlus = document.getElementById("chiPlusPlus")

chiPlusPlus.style.cssText = `
    width: 300px;
    border: 1px solid #000;
    padding: 10px;
    border-radious: 6px;
`

const h1 = document.createElement("h1")
h1.textContent = "This is a heading heading"
h1.style.color = "blue"

const p = document.createElement("p")
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum hic illum amet. Id labore atque vero consectetur nulla esse, at ullam, omnis veritatis magnam odit repudiandae. Culpa vitae aliquam dolor."
p.style.fontStyle = "italic"
p.classList = "text-center text-red-600 bg-red-200"

const button = document.createElement("button")
button.textContent = "Read more"

chiPlusPlus.appendChild(h1)
chiPlusPlus.appendChild(p)
chiPlusPlus.appendChild(button)

const tarikh = document.getElementById("tarikh")
const d = new Date()
const today = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()

tarikh.textContent = today

const junaid = document.getElementById("junaid")
junaid.addEventListener("click", () => {
    alert("Button clicked!")
})

const ruman = document.getElementById("ruman")
ruman.addEventListener("click", () => {
    alert(ruman.getAttribute("data-bari"))
})