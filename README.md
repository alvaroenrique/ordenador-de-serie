# Ordenador de serie
 
 https://odenador-serie.netlify.com/
 
 Se empleó unicamente Javascript - css - html.
 
 Se uso el framework [ParcelJs](https://parceljs.org/) para minificar los archivos y como servidor de desarrollo, además se usó para la compatibilidad de navegadores, debido a que se usó ECMAscript 6.
 
 Para que se pueda visualizar el resultado final, se subio la aplicación a un servidor gratuito.
 
 Puede ver el resultado de la aplicación siguiendo el siguiente [LINK](https://odenador-serie.netlify.com/)
 
 Para el ordenamiento se uso el algoritmo quicksort, aprendido en el curso Estructura de Datos y Algoritmos
 
 ``` js
  function quickSort(arr) {
    if (arr.length < 1) {
      return [];
    }
    let left = [];
    let right = [];
    let pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [].concat(quickSort(left), pivot, quickSort(right));
}
 ```
