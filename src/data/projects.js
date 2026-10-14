// Cada proyecto espera sus capturas en /public/assets/screenshots/<id>/01.ext, 02.ext, 03.ext...
// Mientras un archivo no exista (o no cargue), esa posición del carrusel muestra el panel de
// respaldo con el glyph y el color del proyecto — no hay que tocar código, solo copiar las
// imágenes con esos nombres exactos a esa carpeta.
// Cada entrada es un alt de texto plano (usa `defaultExt`), o [alt, ext] para una extensión propia.
function screenshotsFor(id, entries, defaultExt = 'jpg') {
  return entries.map((entry, i) => {
    const [alt, ext] = Array.isArray(entry) ? entry : [entry, defaultExt];
    return {
      src: `/assets/screenshots/${id}/${String(i + 1).padStart(2, '0')}.${ext}`,
      alt,
    };
  });
}

export const PROJECTS = [
  {
    id: 'wajiralux',
    title: 'WajiraLux',
    summary:
      'App móvil de control de iluminación inteligente para laboratorios: selección de espacio, encendido/apagado remoto y ajuste de color y brillo por foco, en tiempo real.',
    tech: ['React Native', 'Expo', 'Laravel', 'MySQL'],
    screenshots: screenshotsFor('wajiralux', [
      'Pantalla de inicio de sesión de WajiraLux',
      'Selección de laboratorio disponible',
      'Control de color e intensidad de los focos en tiempo real',
      'Prácticas predefinidas aplicables al laboratorio activo',
    ], 'webp'),
    glyph: 'WL',
    accent: '#A068FF',
  },
  {
    id: 'smart-enviro',
    title: 'Smart Enviro',
    summary:
      'Plataforma IoT para huertos inteligentes: telemetría de sensores en tiempo real y una app pensada para ser usada por adultos mayores, con gráficas simples y navegación clara.',
    tech: ['React Native', 'Expo', 'Laravel', 'Redis', 'MySQL'],
    screenshots: screenshotsFor('smart-enviro', [
      'Pantalla de inicio de sesión de Smart Enviro',
      'Dashboard con los dispositivos ESP32 conectados',
      'Detalle de un dispositivo: humedad en vivo e historial',
      'Control de riego inteligente con umbral configurable',
    ], 'webp'),
    glyph: 'SE',
    accent: '#3ddcc7',
  },
  {
    id: 'crm-colima',
    title: 'CRM Colima · Historias Clínicas',
    summary:
      'Sistema de expedientes laborales para la Cruz Roja Mexicana (Delegación Colima): captura de historias clínicas, control de roles, bitácora de auditoría y reportes exportables.',
    tech: ['Next.js', 'TypeScript', 'Laravel', 'PostgreSQL'],
    screenshots: screenshotsFor('crm-colima', [
      'Pantalla de inicio de sesión para personal de Servicios Médicos',
      ['Navegador de expedientes con filtros e historial de atenciones', 'webp'],
      ['Captura de historia clínica laboral, con los 206 campos del formulario', 'webp'],
    ]),
    glyph: 'CR',
    accent: '#ffb84d',
  },
  {
    id: 'starcookies',
    title: 'StarCookies',
    summary:
      'Plataforma de pedidos y administración para un negocio de galletas: catálogo de productos, gestión de empleados y pedidos, con pagos en línea integrados vía MercadoPago.',
    tech: ['PHP', 'MySQL', 'MercadoPago'],
    screenshots: screenshotsFor('starcookies', [
      'Página de inicio de Star Cookies',
      'Menú con el paso a paso para ordenar y los paquetes disponibles',
      'Carrito de compras',
      'Finalizar compra: información de contacto y dirección de entrega',
    ], 'webp'),
    glyph: 'SC',
    accent: '#ff6f91',
  },
];
