var array = []
var id = 0;
var preview

const prev = document.querySelector("#prev");
const input = document.getElementById("url");
const galeria = document.querySelector(".container-fotos")

function Submit() {
  if(preview){
    render();
  }
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value != "") {
    preview = input.value;

    input.value = "";
    showPreview();
  }
})

function render() {
  galeria.innerHTML = "";

  array.push({
    id: id,
    foto: preview
  })
  array.forEach((item) => {
    let container = document.createElement("img");

    container.className = "containerr";
    container.src = item.foto;

    galeria.appendChild(container);
  })
}

function showPreview() {
  prev.innerHTML = ""
  let img = document.createElement("img");
  img.className = "card-foto"
  img.src = preview;
  prev.appendChild(img)
}
