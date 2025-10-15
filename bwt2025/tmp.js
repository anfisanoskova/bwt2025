function latin(){
    const item = document.getElementById('surname')
    console.log(item.innerText)
    item.innerHTML = "Noskova"
    const item1 = document.getElementById('name')
    console.log(item1.innerText)
    item1.innerHTML = "Anfisa"
    const item2 = document.getElementById("father's name")
    console.log(item2.innerText)
    item2.innerHTML = "Mikhailovna"
}
const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",latin)