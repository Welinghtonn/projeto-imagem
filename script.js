var array = []

function Enviar() {
  var input = document.getElementById("url")

  if (input === "") {
    return
  } else {
    let itens = {
      id: crypto.randomUUID(),
      foto: document.getElementById("img").src = input.value
  }
    array.push(input)
  }
  oii()
}

function oii() {
  array.forEach((item) =>{
    console.log(array)
    let container = document.createElement("img");

    container.className = "containerr";
    container.src = item.foto
  })
}
