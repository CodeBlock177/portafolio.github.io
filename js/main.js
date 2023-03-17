const typed = new Typed('.typed', {
    /*
    strings: 
    [
        'Eduardo', 
        'Williams',
        'Desarollador Web'
    ],
    */

    stringsElement: "#string", //Id del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // velocidad en milisegundos para poner una letra.
    startDeley: 300, // tiempo de retraso en iniciar la animacion cuando carga la pagina. aplica tambien cuando termina y vuelve a iniciar
    backSpeed: 75, // velocidad en milisegundos para borrar una letra
    smartBackspace: true, // eliminar solamente las palabras que sean nuevas en la cadena de texto.
    shuffle: false, // alterar el orden en el que se escriben las palabras.
    backDelay: 1500, // tiempo de espera despues de que termina de escribir una palabra
    loop: false, // tepetir el array de string.
    loopCount: false, // cantidad de veces a repetir el array. false = infinite.
    showCursor: true, // mostrar cursor palpitando.
    cursorChar: '|', // caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato


});