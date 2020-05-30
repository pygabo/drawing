let drawingLine = (color, x_start, y_start, x_end, y_end) => {

    let d = document.getElementById("dibujito");
    let lienzo = d.getContext("2d");

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_start, y_start);
    lienzo.lineTo(x_end, y_end);
    lienzo.stroke();
    lienzo.closePath();
}
export { drawingLine };