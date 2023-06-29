function countNameRepetitions(names) {
    var result = {};
  
    names.forEach(function(name) {
      if (result[name]) {
        result[name] += '*';
      } else {
        result[name] = '*';
      }
    });
  
    return result;
  }

const nombres = ['Juan', 'María', 'Pedro', 'Juan', 'María', 'María'];
const resultado = countNameRepetitions(nombres);
console.log(resultado);