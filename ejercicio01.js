// Número palíndromo
function next_pal(num) {
    num++; // Incrementamos el número para encontrar el siguiente
  
    while (true) {
      if (num.toString() === num.toString().split("").reverse().join("")) {
        return num;
      } else {
        num++;
      }
    }
  }
  
  console.log(next_pal(11));    // Devuelve 22
  console.log(next_pal(188));   // Devuelve 191
  console.log(next_pal(191));   // Devuelve 202
  console.log(next_pal(2541));  // Devuelve 2552