# Instagram Clone — Trabajo Práctico React + TypeScript

Clon web de Instagram desarrollado con React y TypeScript, que consume imágenes de gatos desde [The Cat API](https://thecatapi.com/).

---

## Diseño de Figma utilizado como referencia

[Instagram Web UI Recreated — Figma Community](https://www.figma.com/community/file/1004033523744290376)

El diseño implementado respeta la estética oscura del Figma: fondo azul oscuro (`#0d0f1a`), sidebar izquierdo con perfil y navegación, carrusel de historias, feed en formato masonry de 3 columnas, y modal de publicación individual.

---

## Cómo ejecutar el proyecto

```bash
# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

---

## Organización del proyecto

```
src/
├── components/
│   ├── Header/         → Barra superior
│   ├── Sidebar/        → Barra lateral con perfil y navegación
│   ├── Stories/        → Carrusel de historias
│   ├── Feed/           → Grilla de publicaciones
│   ├── PostCard/       → Tarjeta individual del feed
│   ├── Modal/          → Ventana emergente de publicación
│   └── Perfil/         → Vista de perfil del usuario
├── data/
│   ├── usuario.ts      → Datos fijos del usuario logueado
│   └── comentarios.ts  → Comentarios y datos simulados
├── types/
│   └── index.ts        → Interfaces TypeScript
├── App.tsx             → Componente raíz
└── index.css           → Estilos globales
```

---

## Componentes y su responsabilidad

| Componente | Responsabilidad |
|---|---|
| `Header` | Barra superior fija con logo, buscador y botones de acción |
| `Sidebar` | Barra lateral con foto de perfil, estadísticas y menú de navegación |
| `Stories` | Carrusel horizontal de historias con avatares circulares |
| `Feed` | Contenedor del feed, muestra el spinner de carga y la grilla masonry |
| `PostCard` | Tarjeta de publicación individual dentro del feed |
| `Modal` | Ventana emergente con la publicación ampliada y detallada |
| `Perfil` | Vista completa del perfil del usuario con grilla de publicaciones |

La componentización se decidió siguiendo el principio de responsabilidad única: cada componente hace una sola cosa y puede reutilizarse de forma independiente. `PostCard` se reutiliza tanto en el `Feed` como en el `Perfil`.

---

## Comunicación mediante props

- `App` → `Sidebar`: pasa `usuario`, `vistaActual` y `onCambiarVista`
- `App` → `Stories`: pasa el array `stories`
- `App` → `Feed`: pasa `posts`, `cargando` y `onSeleccionarPost`
- `Feed` → `PostCard`: pasa cada `post` y `onSeleccionar`
- `App` → `Modal`: pasa el `post` seleccionado y `onCerrar`
- `App` → `Perfil`: pasa `usuario`, `posts` y `onSeleccionarPost`

---

## Hooks utilizados

| Hook | Dónde | Para qué |
|---|---|---|
| `useState` | `App` | Guardar `posts`, `stories`, `cargando`, `postSeleccionado`, `vistaActual` |
| `useState` | `Modal` | Manejar el estado de like (activo/inactivo) y la cantidad de likes |
| `useEffect` | `App` | Realizar la petición a The Cat API al montar el componente |

---

## Consumo de API

Se utiliza **Axios** dentro de un `useEffect` en `App.tsx` para consumir [The Cat API](https://api.thecatapi.com/v1/images/search) con un límite de 20 imágenes. Las imágenes se transforman en objetos `Post` con datos simulados (username, likes, descripción, comentarios, fecha).

---

## Visualización individual de publicaciones

Se resolvió mediante un **modal (ventana emergente)**. Al hacer click en cualquier `PostCard` del feed o en cualquier imagen del perfil, se actualiza el estado `postSeleccionado` en `App`. Si ese estado no es `null`, se renderiza el componente `Modal` con la publicación seleccionada. El modal muestra:

- Imagen ampliada
- Nombre de usuario y fecha
- Descripción/caption
- Comentarios simulados
- Botones de like, comentar y compartir
- Contador de likes interactivo
- Input para agregar comentarios

---

## Perfil de usuario emulado

El perfil está definido de forma fija en `src/data/usuario.ts` como un objeto `UserProfile`. No hay login ni registro. La aplicación simula que el usuario ya está logueado. Los datos que se muestran son:

- Nombre de usuario y nombre completo
- Foto de perfil (imagen de gato desde Cataas)
- Biografía breve
- Cantidad de publicaciones, seguidores y seguidos
- Grilla de publicaciones asociadas al perfil
- Botón de "Editar perfil" y configuración (visuales)

---

## Estados para selección de publicaciones

- `postSeleccionado: Post | null` — guarda la publicación clickeada. Si es `null`, el modal no se muestra.
- `vistaActual: 'home' | 'perfil'` — controla si se muestra el feed o el perfil.
- `likeActivo: boolean` (dentro de `Modal`) — controla si el like está activado o no.
- `cantidadLikes: number` (dentro de `Modal`) — refleja el conteo actualizado de likes.

---

## Tecnologías utilizadas

- React 19
- TypeScript
- Vite
- Axios
- The Cat API
