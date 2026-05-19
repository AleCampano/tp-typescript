import type { Comentario } from '../types';

// Datos fijos de cada publicación del feed
export const datosPosts = [
  {
    username: '@michi_fan',
    likes: 1200,
    descripcion: 'Un día perfecto con mi gato 🐱',
    fecha: 'hace 2 horas',
    comentarios: [
      { usuario: '@cat_lover99', texto: 'Qué lindo gatito! 😍' },
      { usuario: '@felino_pro', texto: 'Me encanta esta foto' },
    ] as Comentario[],
  },
  {
    username: '@cat_lover99',
    likes: 3400,
    descripcion: 'Mirá esos ojitos 😍',
    fecha: 'hace 5 horas',
    comentarios: [
      { usuario: '@gatitos_arg', texto: 'Hermoso pelaje �' },
      { usuario: '@miaumiau', texto: 'Adorable!' },
    ] as Comentario[],
  },
  {
    username: '@felino_pro',
    likes: 870,
    descripcion: 'El rey de la casa �',
    fecha: 'hace 1 día',
    comentarios: [
      { usuario: '@purrfect', texto: 'Qué ternura 💕' },
      { usuario: '@michi_fan', texto: 'Increíble foto' },
    ] as Comentario[],
  },
  {
    username: '@gatitos_arg',
    likes: 5600,
    descripcion: 'Siesta de domingo ☀️',
    fecha: 'hace 2 días',
    comentarios: [
      { usuario: '@cat_world', texto: 'Me robó el corazón �' },
      { usuario: '@felinos_bsas', texto: 'Qué ojos tan lindos' },
    ] as Comentario[],
  },
  {
    username: '@miaumiau',
    likes: 2100,
    descripcion: 'Demasiado lindo para ser real �',
    fecha: 'hace 3 días',
    comentarios: [
      { usuario: '@michi_fan', texto: 'Demasiado tierno!' },
      { usuario: '@cat_lover99', texto: 'Foto perfecta 📸' },
    ] as Comentario[],
  },
  {
    username: '@purrfect',
    likes: 980,
    descripcion: 'Mi compañero fiel �',
    fecha: 'hace 4 días',
    comentarios: [
      { usuario: '@felino_pro', texto: 'Qué lindo gatito! 😍' },
      { usuario: '@gatitos_arg', texto: 'Me encanta esta foto' },
    ] as Comentario[],
  },
  {
    username: '@gatero_oficial',
    likes: 4300,
    descripcion: 'Explorando el mundo felino 🌍',
    fecha: 'hace 5 días',
    comentarios: [
      { usuario: '@miaumiau', texto: 'Hermoso pelaje 🐾' },
      { usuario: '@purrfect', texto: 'Adorable!' },
    ] as Comentario[],
  },
  {
    username: '@felinos_bsas',
    likes: 760,
    descripcion: 'Puro amor en cuatro patas ❤️',
    fecha: 'hace 1 semana',
    comentarios: [
      { usuario: '@cat_world', texto: 'Qué ternura 💕' },
      { usuario: '@michi_fan', texto: 'Increíble foto' },
    ] as Comentario[],
  },
  {
    username: '@cat_world',
    likes: 1500,
    descripcion: 'El jefe del hogar 😸',
    fecha: 'hace 2 semanas',
    comentarios: [
      { usuario: '@cat_lover99', texto: 'Me robó el corazón 🐱' },
      { usuario: '@felino_pro', texto: 'Qué ojos tan lindos' },
    ] as Comentario[],
  },
  {
    username: '@miau_miau',
    likes: 6200,
    descripcion: 'Tarde de fotos con el michi 📸',
    fecha: 'hace 3 semanas',
    comentarios: [
      { usuario: '@gatitos_arg', texto: 'Demasiado tierno!' },
      { usuario: '@miaumiau', texto: 'Foto perfecta 📸' },
    ] as Comentario[],
  },
  {
    username: '@gatito_bello',
    likes: 3100,
    descripcion: 'Cuando te mira así... 🥺',
    fecha: 'hace 1 mes',
    comentarios: [
      { usuario: '@purrfect', texto: 'Qué lindo gatito! 😍' },
      { usuario: '@cat_world', texto: 'Me encanta esta foto' },
    ] as Comentario[],
  },
  {
    username: '@felino_real',
    likes: 450,
    descripcion: 'Vida de gato, vida perfecta ✨',
    fecha: 'hace 2 meses',
    comentarios: [
      { usuario: '@michi_fan', texto: 'Hermoso pelaje 🐾' },
      { usuario: '@cat_lover99', texto: 'Adorable!' },
    ] as Comentario[],
  },
  {
    username: '@michi_fan',
    likes: 2800,
    descripcion: 'Un día perfecto con mi gato 🐱',
    fecha: 'hace 2 horas',
    comentarios: [
      { usuario: '@felino_pro', texto: 'Qué ternura 💕' },
      { usuario: '@gatitos_arg', texto: 'Increíble foto' },
    ] as Comentario[],
  },
  {
    username: '@cat_lover99',
    likes: 7100,
    descripcion: 'Mirá esos ojitos 😍',
    fecha: 'hace 5 horas',
    comentarios: [
      { usuario: '@miaumiau', texto: 'Me robó el corazón 🐱' },
      { usuario: '@purrfect', texto: 'Qué ojos tan lindos' },
    ] as Comentario[],
  },
  {
    username: '@felino_pro',
    likes: 1900,
    descripcion: 'El rey de la casa 👑',
    fecha: 'hace 1 día',
    comentarios: [
      { usuario: '@cat_world', texto: 'Demasiado tierno!' },
      { usuario: '@michi_fan', texto: 'Foto perfecta 📸' },
    ] as Comentario[],
  },
  {
    username: '@gatitos_arg',
    likes: 630,
    descripcion: 'Siesta de domingo ☀️',
    fecha: 'hace 2 días',
    comentarios: [
      { usuario: '@cat_lover99', texto: 'Qué lindo gatito! 😍' },
      { usuario: '@felino_pro', texto: 'Me encanta esta foto' },
    ] as Comentario[],
  },
  {
    username: '@miaumiau',
    likes: 4800,
    descripcion: 'Demasiado lindo para ser real 💕',
    fecha: 'hace 3 días',
    comentarios: [
      { usuario: '@gatitos_arg', texto: 'Hermoso pelaje 🐾' },
      { usuario: '@miaumiau', texto: 'Adorable!' },
    ] as Comentario[],
  },
  {
    username: '@purrfect',
    likes: 2200,
    descripcion: 'Mi compañero fiel 🐾',
    fecha: 'hace 4 días',
    comentarios: [
      { usuario: '@purrfect', texto: 'Qué ternura 💕' },
      { usuario: '@cat_world', texto: 'Increíble foto' },
    ] as Comentario[],
  },
  {
    username: '@gatero_oficial',
    likes: 900,
    descripcion: 'Explorando el mundo felino 🌍',
    fecha: 'hace 5 días',
    comentarios: [
      { usuario: '@felinos_bsas', texto: 'Me robó el corazón 🐱' },
      { usuario: '@michi_fan', texto: 'Qué ojos tan lindos' },
    ] as Comentario[],
  },
  {
    username: '@felinos_bsas',
    likes: 3700,
    descripcion: 'Puro amor en cuatro patas ❤️',
    fecha: 'hace 1 semana',
    comentarios: [
      { usuario: '@cat_lover99', texto: 'Demasiado tierno!' },
      { usuario: '@felino_pro', texto: 'Foto perfecta 📸' },
    ] as Comentario[],
  },
];

// Datos fijos de las publicaciones del perfil propio
export const datosPostsPropios = [
  {
    likes: 1200,
    descripcion: 'Un día perfecto con mi gato 🐱',
    fecha: 'hace 2 horas',
    comentarios: [
      { usuario: '@cat_lover99', texto: 'Qué lindo gatito! 😍' },
      { usuario: '@felino_pro', texto: 'Me encanta esta foto' },
    ] as Comentario[],
  },
  {
    likes: 3400,
    descripcion: 'Mirá esos ojitos 😍',
    fecha: 'hace 5 horas',
    comentarios: [
      { usuario: '@gatitos_arg', texto: 'Hermoso pelaje 🐾' },
      { usuario: '@miaumiau', texto: 'Adorable!' },
    ] as Comentario[],
  },
  {
    likes: 870,
    descripcion: 'El rey de la casa 👑',
    fecha: 'hace 1 día',
    comentarios: [
      { usuario: '@purrfect', texto: 'Qué ternura 💕' },
      { usuario: '@michi_fan', texto: 'Increíble foto' },
    ] as Comentario[],
  },
  {
    likes: 5600,
    descripcion: 'Siesta de domingo ☀️',
    fecha: 'hace 2 días',
    comentarios: [
      { usuario: '@cat_world', texto: 'Me robó el corazón 🐱' },
      { usuario: '@felinos_bsas', texto: 'Qué ojos tan lindos' },
    ] as Comentario[],
  },
  {
    likes: 2100,
    descripcion: 'Demasiado lindo para ser real 💕',
    fecha: 'hace 3 días',
    comentarios: [
      { usuario: '@michi_fan', texto: 'Demasiado tierno!' },
      { usuario: '@cat_lover99', texto: 'Foto perfecta 📸' },
    ] as Comentario[],
  },
  {
    likes: 980,
    descripcion: 'Mi compañero fiel 🐾',
    fecha: 'hace 4 días',
    comentarios: [
      { usuario: '@felino_pro', texto: 'Qué lindo gatito! 😍' },
      { usuario: '@gatitos_arg', texto: 'Me encanta esta foto' },
    ] as Comentario[],
  },
];
