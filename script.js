var array = []

document.getElementById("url").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    Enviarr();
  }
});

function Enviar(){
  console.log(array)
  oiii()
}

function oiii() {
  array.forEach((item) => {
    console.log(array);
    let container = document.createElement("img");

    container.className = "containerr";
    container.src = item.foto;

    document.body.appendChild(container);
  })}

function Enviarr() {
  var input = document.getElementById("url");

  if (input.value === "") {
    return;
  } else {
    let item = {
      id: crypto.randomUUID(),
      foto: input.value
    };

    document.getElementById("url").value = "";
    array.push(item);
    oii();
  }
}

function oii() {
  array.forEach((item) => {
    console.log(array);
    let img = document.createElement("img");

    img.className = "card-foto";
    img.src = item.foto;

    let prev = document.getElementById("prev");
    prev.innerHTML = ""; 
    prev.appendChild(img);

  });
}