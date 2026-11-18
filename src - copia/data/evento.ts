// src/data/evento.ts
// Datos de la pareja, en un solo lugar. La portada los lee de acá: para
// armar la muestra de otra pareja alcanza con cambiar este archivo (y el
// monograma en /public/imagenes).
//
// Invitación de MUESTRA para clientes: pareja y datos ficticios.

export const evento = {
    // Se muestran en este orden: "Faibol & Yohanna"
    nombre1: "Faibol",
    nombre2: "Yohanna",
    // Monograma blanco sobre transparente: se usa en el sello de cera y
    // en la tarjeta, y se tiñe por CSS donde hace falta otro color.
    monograma: "/imagenes/av.png",
    iniciales: "FY",
    anuncio: "¡ Nos Casamos !",
    fechaCorta: "5 · 12 · 2026",
    fechaLarga: "Sábado 5 de diciembre de 2026",
};

export const tituloPagina = `${evento.nombre1} & ${evento.nombre2} | 5 de Diciembre 2026`;
