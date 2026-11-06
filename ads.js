/* ═══════════════════════════════════════════════════════════════════════
   PUBLICIDAD DE ECUANEWS  —  este es el ÚNICO archivo que debes editar
   para poner tus anuncios. No toques index.html.

   CÓMO USARLO (resumen):
   1) Sube tus imágenes al repo, en una carpeta llamada  ads  (ej.  ads/goool-lateral.jpg)
   2) Agrega un bloque {...} dentro de ADS_CASA, como los ejemplos de abajo.
   3) Haz Commit. En 1–2 minutos ya se ve (si no, recarga dos veces).

   TAMAÑOS DE IMAGEN RECOMENDADOS
   • railImg   → barras laterales (solo pantallas grandes):  160 × 600 px  (se ve nítida hasta 300 × 600)
   • inlineImg → franja entre noticias (celular y escritorio): 728 × 90 px  (o 970 × 90)
   • img       → imagen cuadrada pequeña (400 × 400) si NO tienes diseño completo: se muestra con tu texto
   Formatos: JPG, PNG o WEBP. Peso ideal: menos de 150 KB cada una.
   ═══════════════════════════════════════════════════════════════════════ */

window.ADS_CASA = [
  /* ── EJEMPLO 1: con diseño completo (lo más vistoso) ─────────────────────
  {
    nombre:    'Goool - Noticias deportivas',       // texto alternativo (accesibilidad)
    url:       'https://TU-USUARIO.github.io/Goool/', // a dónde lleva el clic
    railImg:   'ads/goool-lateral.jpg',              // 160×600
    inlineImg: 'ads/goool-franja.jpg'                // 728×90
  },
  */

  /* ── EJEMPLO 2: sin diseño, solo texto + imagen pequeña ──────────────────
  {
    nombre: 'Canal de Telegram EcuaNews',
    texto:  'Recibe las noticias de última hora en tu celular.',
    url:    'https://t.me/TU_CANAL',
    img:    'ads/telegram.png',                      // opcional
    cta:    'Unirme'                                 // texto del botón
  },
  */
];

/* ── BANNER GRANDE debajo de las destacadas (un anuncio por ciudad) ───────
   Usa  todas  para que salga en todo el país, o el nombre de una ciudad:
   quito, guayaquil, manta, portoviejo, cuenca, ambato, loja, esmeraldas, machala, ibarra
   (el de una ciudad tiene prioridad sobre el de "todas").                    */
window.ADS_SPONSORS = {
  /* todas: {
    nombre: 'Goool — Mundial 2026',
    texto:  'Resultados, tablas y noticias deportivas en un solo lugar.',
    url:    'https://TU-USUARIO.github.io/Goool/',
    img:    'ads/goool-icono.png'     // opcional, cuadrada
  }, */
};
