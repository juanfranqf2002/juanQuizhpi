var btnElm =
  document.getElementById(
    'btnSegir'
  ); /*Asigna a la variable el valor del atributo con id btnseguir*/
var btnEliminar = document.getElementById('btnEliminar');
var pElm = document.getElementById('seguidores');
var contar = 0; /*Craecion de variable*/
pElm.textContent = 0; /*Se asigna un valor inicial de 0*/
btnElm.onclick = function () {
  /*Se llama a la acion cuando pulsa*/
  contar++; /*aumenta contador*/
  pElm.textContent = contar; /*Se asigna y se muestra en pantalla*/
};
btnEliminar.onclick = function () {
  //contar--;
  //pElm.textContent=contar;
  if (contar == 0) {
    pElm.textContent = 0;
  } else {
    contar--;
    pElm.textContent = contar;
  }
};

function buscar() {
  /**Creacion de fucnion buscar*/
  var nombre =
    document.getElementById(
      'datoBusqueda'
    ).value; /**Se obtiene el valor de un campo input */
  var imprimirRes = document.getElementById('respBusqueda');
  var jug1 = 'pedri';
  var jug2 = 'gavi';
  var jug3 = 'ansu';

  if (nombre == jug1) {
    imprimirRes.textContent = 'Buscaste Pedri';
  } else if (nombre == jug2) {
    imprimirRes.textContent = 'Buscaste Gavi';
  } else if (nombre == jug3) {
    imprimirRes.textContent = 'Buscaste Ansu';
  } else {
    imprimirRes.textContent = 'Busqueda Fallida';
  }
}
function limpiar() {
  var imprimirRes = document.getElementById('respBusqueda');
  imprimirRes.textContent = '';
}

//Metodos para cambio de imagenes img1
var imagenes = [
  'https://www.fcbarcelona.com/photo-resources/2022/11/02/85247947-27dc-488c-a6cb-d81c5e391559/09-ROBERT_LEWANDOWSKI.jpg?width=1200&height=750',
  'https://www.fcbarcelonanoticias.com/uploads/s1/13/52/74/5/robert-lewandowski-celebra-un-go-en-laliga.jpeg',
  'https://assets-es.imgfoot.com/media/cache/642x382/robert-lewandowski-2223-1-632c3f0282d8b.jpg',
];
var indiceImagen = 0;
function cambiarImagen() {
  // Obtener el elemento de la imagen
  var imagen = document.getElementById('imagen');

  // Actualizar la imagen con la siguiente en el arreglo
  imagen.src = imagenes[indiceImagen];

  // Incrementar el índice de la imagen actual
  indiceImagen++;

  // Si se alcanza el final del arreglo, volver al principio
  if (indiceImagen == imagenes.length) {
    indiceImagen = 0;
  }
}
setInterval(cambiarImagen, 1000);

//Metodos para cambio de imagenes img2
var imagenes2 = [
  'https://www.fcbarcelona.com/photo-resources/2022/11/02/68339d90-282b-4e03-98fa-54395765867c/30-GAVI_.jpg?width=1200&height=750',
  'https://as01.epimg.net/opinion/imagenes/2021/12/19/blogs/1639939491_857688_1639939560_noticia_normal_recorte1.jpg',
  'https://phantom-marca.unidadeditorial.es/6c620dd901188355607d0635999464f8/resize/1320/f/jpg/assets/multimedia/imagenes/2023/03/29/16801207252934.jpg',
];
var indiceImagen2 = 0;
function cambiarImagen2() {
  // Obtener el elemento de la imagen
  var imagen2 = document.getElementById('imagen2');

  // Actualizar la imagen con la siguiente en el arreglo
  imagen2.src = imagenes2[indiceImagen2];

  // Incrementar el índice de la imagen actual
  indiceImagen2++;

  // Si se alcanza el final del arreglo, volver al principio
  if (indiceImagen2 == imagenes2.length) {
    indiceImagen2 = 0;
  }
}
setInterval(cambiarImagen2, 1000);

//Metodos para cambio de imagenes img3

var imagenes3 = [
  'https://www.fcbarcelona.com/photo-resources/2022/11/02/d57390d3-5cd5-426f-a1b2-e4cefb1a3d9a/01-MARC-ANDRE_TER_STEGEN.jpg?width=1200&height=750',
  'https://imagenes.expreso.ec/files/image_700_402/uploads/2023/03/13/640fae99bfa78.jpeg',
  'https://imageio.forbes.com/specials-images/imageserve/641432d4300aa9a1b1c324b5/Marc-Andre-ter-Stegen-could-be-sold-by-FC-Barcelona-to-Paris-Saint-Germain-this/960x0.jpg?format=jpg&width=960',
];
var indiceImagen3 = 0;
function cambiarImagen3() {
  // Obtener el elemento de la imagen
  var imagen3 = document.getElementById('imagen3');

  // Actualizar la imagen con la siguiente en el arreglo
  imagen3.src = imagenes3[indiceImagen3];

  // Incrementar el índice de la imagen actual
  indiceImagen3++;

  // Si se alcanza el final del arreglo, volver al principio
  if (indiceImagen3 == imagenes3.length) {
    indiceImagen3 = 0;
  }
}
setInterval(cambiarImagen3, 1000);

/*Codigo para cargar imagenesdeFondo*/

var imagesF = [
  'https://www.fcbarcelona.com/photo-resources/2021/08/09/276ad270-e5c6-453d-8d9f-212417ad7cb3/Camp-Nou-3.jpg?width=1200&height=750',
  'https://as.com/futbol/imagenes/2017/03/08/champions/1488989204_198978_1489010180_noticia_normal.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bar%C3%A7a_6_-_PSG_1%3B_Dimecres_8_de_mar%C3%A7_de_2017.jpg/1200px-Bar%C3%A7a_6_-_PSG_1%3B_Dimecres_8_de_mar%C3%A7_de_2017.jpg',
];

var counter = 0;
function changeBackground() {
  if (counter === imagesF.length) {
    counter = 0;
  }

  document.getElementById('background').style.backgroundImage =
    "url('" + imagesF[counter] + "')";
  counter++;

  setTimeout(changeBackground, 5000);
}

changeBackground();
