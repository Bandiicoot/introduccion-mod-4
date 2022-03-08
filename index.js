const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  //var listaUnica = document.getElementsByClassName("lista");
  //var itemAEliminar = listaUnica.querySelector("li");
  //listaUnica.removeChild(itemAEliminar);
  var listaVacia = document.querySelector(".lista");
  var listaUnicaEl = document.querySelectorAll(".lista li ");
  console.log(listaUnicaEl);
  for (let el of listaUnicaEl) {
    el.remove();
  }
  for (let item of cosasQueAprendimos) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = item.tema;
    const claseAAsignar = item.class || "gambarembo";
    newLiEl.classList.add(claseAAsignar);

    listaVacia.appendChild(newLiEl);
  }
}

main();
