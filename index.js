import {drawingLine} from './src/drawing_line'

let lineas = 200;
let l = 0;
let yi, xf, xi;
let primary_color = "#18C29C";

for(l=0; l <lineas; l++){
    yi = 10 * l;
    xf = 10 * (l + 1);
    xi = 300 - (l * 10);
        drawingLine(primary_color, xi, 0, 0, yi);
        drawingLine(primary_color, 0, yi, xf, 300);
        drawingLine(primary_color, xi, 300, 300, yi);
        drawingLine(primary_color, 300, yi, xf, 0);
}

// Border
drawingLine(primary_color, 1, 1, 1, 299);
drawingLine(primary_color, 1, 299, 299, 299);
drawingLine(primary_color, 299, 1, 1, 1);
drawingLine(primary_color, 299, 299, 299, 1);





