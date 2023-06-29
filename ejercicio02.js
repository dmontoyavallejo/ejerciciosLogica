function createPhoneNumber(numbers) {
    var Parte1 = numbers.slice(0, 3).join("");
    var Parte2 = numbers.slice(3, 6).join("");
    var Parte3 = numbers.slice(6).join("");
  
    return `(${Parte1}) ${Parte2}-${Parte3}`;
  }

  console.log(createPhoneNumber([3, 0, 5, 1, 2, 7, 7, 2, 4, 9]))
  