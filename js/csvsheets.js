function parseCSV(text) {
  // Obtenemos las lineas del texto
  let lines = text.replace(/\r/g, '').split('\n');
  return lines.map(line => {
    // Por cada linea obtenemos los valores
    let values = line.split(',');
    return values;
  });
}

function reverseMatrix(matrix){
  let output = [];
  // Por cada fila
  matrix.forEach((values, row) => {
    // Vemos los valores y su posicion
    values.forEach((value, col) => {
      // Si la posición aún no fue creada
      if (output[col] === undefined) output[col] = [];
      output[col][row] = value;
    });
  });
  return output;
}

function readFile(file) {
  let file = evt.target.files[0];
  let reader = new FileReader();
  reader.onload = (e) => {
    // Cuando el archivo se terminó de cargar
    let lines = parseCSV(e.target.result);
    let output = reverseMatrix(lines);
    console.log(output);
  };
  // Leemos el contenido del archivo seleccionado
  reader.readAsBinaryString('https://docs.google.com/spreadsheets/d/e/2PACX-1vRi0TErB19VVDtMywTl3CjNweMuABO7Ot25_x0C2MMqgfHPohJerAkBGAf6aS0T94xZ6-9WDLLcmTJ1/pub?output=csv');
}