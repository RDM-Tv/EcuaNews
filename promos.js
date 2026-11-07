/* ═══════════════════════════════════════════════════════════════════════
   PROMOCIONES DE ECUANEWS (publicidad)  —  este es el ÚNICO archivo que debes editar
   para poner tus anuncios. No toques index.html.

   NOTA: el archivo se llama promos.js y la carpeta promos/ a propósito: los bloqueadores de
   anuncios bloquean archivos y carpetas llamados "ads" o "banner".

   CÓMO USARLO (resumen):
   1) Sube tus logos/imágenes al repo, en una carpeta llamada  promos
      (OJO: GitHub distingue mayúsculas: "Logo-MedicOs.svg" ≠ "logo-medicos.svg")
   2) Agrega un bloque {...} dentro de ADS_CASA, copiando el de MedicOs y cambiando los textos.
      ("imagen" = ilustración principal del banner; "logo" = alternativa si solo tienes un logo)
   3) Haz Commit. En 1–2 minutos ya se ve (si no, recarga dos veces).

   DOS FORMAS DE HACER UN ANUNCIO
   A) CON PLANTILLA (la que usa MedicOs): solo das logo, color y textos, y EcuaNews dibuja
      los 3 formatos con ese diseño:
        rail   → barras laterales (160 × 600, solo pantallas grandes de 1580 px o más)
        inline → franja entre noticias (728 × 90; en celular se acomoda sola)
        box    → cuadrado en el panel derecho, debajo de Tendencias (escritorio)
      Si omites un formato (por ejemplo "box"), ese anuncio simplemente no sale en ese lugar.
   B) CON IMAGEN LISTA (diseñada por ti en otra herramienta):
        railImg: 'promos/x-lateral.jpg' (160×600) · inlineImg: 'promos/x-franja.jpg' (728×90) · boxImg: 'promos/x-cuadro.jpg' (400×400)

   ROTACIÓN: con 2 o más anuncios, cambian solos cada cierto tiempo (barras laterales, franjas y cuadro).
   • peso (opcional, por defecto 1): cuántas veces aparece en la rotación. MedicOs tiene peso 3 = prioridad.
   • Las dos barras laterales nunca muestran el mismo anuncio a la vez si hay otro disponible.
   • Cada cuántos segundos cambian: ADS_ROTAR_SEG (abajo).
   ═══════════════════════════════════════════════════════════════════════ */

window.ADS_ROTAR_SEG = 30;   // segundos entre cambios de anuncio

window.ADS_CASA = [

  /* ── MedicOs ─────────────────────────────────────────────────────────── */
  {
    nombre: 'MedicOs',
    peso:   3,        // prioridad: aparece 3 veces más que un anuncio normal (peso 1)
    url:    'https://medicos-rdm.github.io/MedicOs-Corporate-Web-Site/inicio.html',
    imagen: 'promos/medicos-doctor.png',   // ← ilustración del doctor (sube este archivo a la carpeta promos)
    // logo: 'promos/Logo-MedicOs.svg',    // (opcional) si no usas "imagen", se muestra este logo
    color:  '#0056b3',
    rail:   { titulo: 'Tu salud\nen orden',                     subtitulo: 'Gestiona tu consulta médica digital', boton: 'Agendar Cita' },
    inline: { titulo: 'Gestiona tus citas médicas fácilmente',                                                         boton: 'Empieza Ahora' },
    box:    { titulo: 'Atención médica\nsin esperas',            subtitulo: 'Tu plataforma médica digital integral', boton: 'Accede Aquí' }
  },


  /* ── Infinite Web Architecture (diseños listos: imágenes) ───────────── */
  {
    nombre:    'Infinite Web Architecture',
    url:       'https://infinitewebarchitecture.github.io/InfiniteWebArchitecture.wp/',
    railImg:   'promos/iwa-lateral.png',   // 160 × 600
    inlineImg: 'promos/iwa-franja.png',    // 728 × 90
    boxImg:    'promos/iwa-cuadro.png'     // 400 × 400
  },


  /* ── SISSO (logo + textos; la plantilla dibuja los 3 formatos) ───────── */
  {
    nombre:     'SISSO',
    url:        'https://sisso-rdc.github.io/SISSO-Corporate-Website/',
    logo:       'promos/sisso-logo.jpg',
    logoGrande: true,
    color:      '#17608f',     // azul
    color2:     '#3d9a44',     // verde (degradado de la barra)
    rail:   { titulo: 'Salud y seguridad ocupacional', subtitulo: 'Asegura el bienestar de tu equipo',
              puntos: ['Salud ocupacional','Ergonomía','Prevención de accidentes','Matrices de riesgos'],
              boton: 'Solicitar información', pie: 'Powered by RonnDu Corp.' },
    inline: { titulo: 'SISSO · Salud y seguridad ocupacional', subtitulo: 'Prevención de riesgos · Ergonomía · Cumplimiento legal', boton: 'Regístrate ahora' },
    box:    { titulo: 'Salud & seguridad total',
              puntos: ['Salud ocupacional','Ergonomía inteligente','Prevención de accidentes','Matrices de riesgos'],
              boton: 'Empieza tu gestión', pie: 'Powered by RonnDu Corp.' }
  },


  /* ── ClinicOs (ilustración + textos; la plantilla dibuja los 3 formatos) ── */
  {
    nombre:  'ClinicOs',
    url:     'https://clinic-os-rdm.github.io/ClinicOs-Corporate-Web-Site/',
    imagen:  'promos/clinicos-equipo.jpg',
    color:   '#1b5aa6',     // azul
    color2:  '#9a5f3c',     // marrón (degradado de la barra)
    rail:   { titulo: 'Tu clínica,\nbien gestionada', subtitulo: 'Plataforma para clínicas y centros médicos',
              puntos: ['Gestión de pacientes','Agenda de citas','Control de tu centro'], boton: 'Conocer ClinicOs' },
    inline: { titulo: 'ClinicOs · Gestiona tu clínica o centro médico', subtitulo: 'Pacientes, citas y administración en un solo lugar', boton: 'Conocer más' },
    box:    { titulo: 'Gestiona tu clínica\nsin complicaciones', subtitulo: 'La plataforma para clínicas y centros médicos',
              puntos: ['Gestión de pacientes','Agenda de citas'], boton: 'Conocer ClinicOs' }
  },

  /* ── PLANTILLA para la siguiente plataforma (copia el bloque, quita las marcas de comentario y edita) ──
  {
    nombre: 'Goool',
    url:    'https://TU-USUARIO.github.io/Goool/',
    logo:   'promos/Logo-Goool.svg',
    color:  '#0a8f3c',
    rail:   { titulo: 'El Mundial\nal minuto', subtitulo: 'Resultados y tablas', boton: 'Ver ahora' },
    inline: { titulo: 'Todo el Mundial 2026 en un solo lugar',               boton: 'Entrar' },
    box:    { titulo: 'Resultados\nen vivo', subtitulo: 'Noticias y estadísticas', boton: 'Abrir Goool' }
  },
  */
];

/* ── BANNER GRANDE debajo de las destacadas (un anuncio por ciudad) ───────
   Usa  todas  para que salga en todo el país, o el nombre de una ciudad:
   quito, guayaquil, manta, portoviejo, cuenca, ambato, loja, esmeraldas, machala, ibarra
   (el de una ciudad tiene prioridad sobre el de "todas").                    */
window.ADS_SPONSORS = {
  todas: {
    nombre: 'MedicOs — Tu salud en orden',
    texto:  'Gestiona tu consulta médica digital',
    url:    'https://medicos-rdm.github.io/MedicOs-Corporate-Web-Site/inicio.html',
    img:    'promos/medicos-doctor.png'
  },
};
