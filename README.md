# Landing Workshop · Rolling Code School

Landing page del workshop **"¿Por dónde empiezo a programar?"**, un evento presencial y virtual con diez charlas cortas de speakers de Rolling Code School.

Proyecto grupal realizado para el **Scrum Professional Bootcamp** de Rolling Code School.

- **Fecha:** jueves 19 de noviembre, 18:00 a 21:40 hs
- **Lugar:** Gral. Paz 576, entrepiso, San Miguel de Tucumán, Tucumán
- **Modalidades:** presencial y virtual

---

## Secciones de la página

| Sección | Descripción |
| --- | --- |
| **Navbar** | Menú con enlaces a Speakers, Agenda, Cómo llegar y botón "Comprar entrada". Se colapsa en celular. |
| **Hero** | Título principal, botones de acción, tarjeta con fecha, lugar y precio, y datos rápidos del evento. |
| **Speakers** | Tarjetas de los diez speakers con foto, nombre, charla y descripción. |
| **Agenda** | Cronograma de las charlas, con horario, título y speaker. |
| **Pagos** | Banner Early Bird con cuenta regresiva y barra de progreso, y tarjetas de precios (Early Bird, General y Virtual). |
| **Pasarela de pago** | Checkout de ejemplo con selección de entrada, cantidad y resumen del pedido. |
| **Ubicación** | Dirección, datos del evento, botones y mapa de Google Maps incrustado. |
| **Footer** | Logo y enlaces a las redes sociales de Rolling Code School. |

## Entradas

| Entrada | Precio | Detalle |
| --- | --- | --- |
| Early Bird | $25.000 | Presencial, hasta el 31/10 |
| General | $35.000 | Presencial, desde el 1/11 |
| Virtual | $15.000 | Transmisión en vivo y grabación por 30 días |

## Tecnologías

- **HTML5**
- **CSS3**, con variables CSS para la paleta de colores
- **Bootstrap 5.3.8**, para grilla, componentes y utilidades
- **Bootstrap Icons 1.13.2**
- **Google Fonts**, con la tipografía Plus Jakarta Sans
- **Git y GitHub**, para el trabajo en equipo

Bootstrap, Bootstrap Icons y la fuente se cargan por CDN, así que hace falta conexión a internet para verlos.

## Estructura del proyecto

```
.
├── index.html          Página principal
├── Error404.html       Página de error (la usa el botón "Continuar" del checkout)
├── css/
│   └── style.css       Estilos propios del proyecto
├── img/
│   ├── logoWhite.webp  Logo de Rolling Code
│   └── speaker3.jpg    Foto de los speakers
└── README.md
```

## Cómo ejecutarlo

No necesita instalación ni dependencias.

1. Cloná el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   ```
2. Entrá a la carpeta del proyecto.
3. Abrí `index.html` en el navegador.

También podés usar la extensión **Live Server** de VS Code: clic derecho sobre `index.html` y **Open with Live Server**.

## Guía de estilos

El cliente entregó su branding con esta paleta, así que no se inventaron colores nuevos. Todos están definidos como variables en `:root`.

| Variable | Color | Uso |
| --- | --- | --- |
| `--rc-red` | `#e0202a` | Botones, etiquetas, números e íconos |
| `--rc-red-dark` | `#a50d14` | Medio del degradado |
| `--rc-red-deep` | `#6e070c` | Final del degradado |
| `--rc-black` | `#0b0b0c` | Fondo del sitio |
| `--rc-surface` | `#111113` | Tarjetas y barra de datos |
| `--rc-surface-2` | `#26262a` | Chips y barras vacías |
| `--rc-border` | `#2c2c31` | Bordes y líneas de 1 px |
| `--rc-white` | `#ffffff` | Títulos y tarjeta del checkout |
| `--rc-text-soft` | `#d4d4d8` | Párrafos sobre fondo oscuro |
| `--rc-text-mute` | `#a1a1aa` | Textos de apoyo |
| `--rc-gradient` | `160°: 0% · 55% · 100%` | Bloque principal y checkout |

**Tipografía:** Plus Jakarta Sans, con `system-ui, sans-serif` de respaldo. Pesos usados: 300 (cursiva), 400, 600 y 800.

**Medidas principales:**

- Contenedor del sitio: 1200 px de ancho, centrado
- Márgenes laterales en celular: 24 px mínimo
- Separación entre secciones: 96 px
- Separación entre tarjetas: 24 px (`gap-4` de Bootstrap)
- Radios: 40 px (bloques rojos), 32 px (tarjetas), 28 px (cajas), 18 px (opciones), 14 px (campos), 999 px (botones y chips)
- Alto mínimo de botones: 52 px

## Navegación interna

Los enlaces del menú y los botones usan anclas a estos `id`:

| Ancla | Destino |
| --- | --- |
| `#inicio` | Inicio de la página |
| `#speaker` | Sección de speakers |
| `#agenda` | Agenda |
| `#pagos` | Tarjetas de precios |
| `#entrada` | Pasarela de pago (elegir entrada) |
| `#ubicacion` | Cómo llegar |

## Notas y límites del proyecto

- La **pasarela de pago es de ejemplo**: no procesa pagos ni guarda datos.
- La cuenta regresiva, la barra de progreso y el resumen del pedido son valores fijos de demostración, sin JavaScript.
- Los botones de cantidad (− y +) todavía no cambian el valor.
- Los enlaces de las charlas de cada speaker están pendientes (`href="#"`).
- Todas las tarjetas de speakers usan la misma foto de prueba (`speaker3.jpg`).

## Flujo de trabajo con Git

Cada integrante trabaja su sección en una rama propia, y después se integra todo en `dev` mediante Pull Request.

1. Crear o cambiar a tu rama: `git checkout -b nombre-de-la-rama`
2. Guardar los cambios: `git add .` y `git commit -m "Mensaje"`
3. Subir la rama: `git push -u origin nombre-de-la-rama`
4. Abrir una **Pull Request** hacia `dev` en GitHub.
5. Si hay conflictos, resolverlos antes de unir y revisar que no queden marcas `<<<<<<<`, `=======` ni `>>>>>>>`.

## Equipo

- Facundo Alvarez
- Lautaro Carrizo
- Agustín Herrera
- Martin Javier Veliz

---

Rolling Code School · Scrum Professional Bootcamp · Proyecto Landing del Workshop
