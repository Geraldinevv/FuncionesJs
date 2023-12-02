function pintar(elemento) {
    const color = colorPorDefecto();
    elemento.style.backgroundColor = color;
}

function colorPorDefecto() {
    return 'green';
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintarYamarillo(ele));

function pintarYamarillo(elemento) {
    elemento.style.backgroundColor = 'yellow';
}