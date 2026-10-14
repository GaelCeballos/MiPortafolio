# Screenshots de proyectos

Capturas reales (no mockups). El carrusel de cada tarjeta (`src/data/projects.js`) las busca por
nombre exacto dentro de la carpeta de su proyecto:

| Carpeta         | Archivos          | Proyecto                        | Qué muestran |
| ---------------- | ------------------ | -------------------------------- | ------------- |
| `wajiralux/`      | `01`–`04.webp`      | WajiraLux                        | Login, selección de laboratorio, control de color/intensidad de focos y prácticas predefinidas — capturas reales desde dispositivo. |
| `smart-enviro/`   | `01`–`04.webp`      | Smart Enviro                     | Login, dashboard de dispositivos ESP32, detalle de humedad en vivo y control de riego inteligente. |
| `crm-colima/`     | `01.jpg`, `02`–`03.webp` | CRM Colima · Historias Clínicas  | Login, navegador de expedientes y captura de historia clínica (206 campos). |
| `starcookies/`    | `01`–`04.webp`      | StarCookies                      | Inicio, menú, carrito y checkout — páginas reales del repo. |

## Cómo reemplazarlas

Copia tu propia captura con el mismo nombre exacto dentro de la carpeta del proyecto y recarga —
no hay que tocar código. Si cambias la cantidad de capturas o la extensión, ajusta la lista en
`screenshotsFor(...)` dentro de `src/data/projects.js` (cada entrada es un `alt`, o `[alt, ext]`
si esa imagen usa una extensión distinta al resto).
