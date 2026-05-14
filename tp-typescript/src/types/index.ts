// Imagen que devuelve The Cat API
export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

// Un comentario dentro de una publicación
export interface Comentario {
  usuario: string;
  texto: string;
}

// Una publicación del feed
export interface Post {
  id: string;
  imageUrl: string;
  username: string;
  userAvatar: string;
  likes: number;
  descripcion: string;
  comentarios: Comentario[];
  fecha: string;
}

// El perfil del usuario logueado
export interface UserProfile {
  username: string;
  nombreCompleto: string;
  bio: string;
  cantidadPublicaciones: number;
  seguidores: number;
  seguidos: number;
  fotoPerfil: string;
}

// Una historia del carrusel
export interface Story {
  id: string;
  username: string;
  avatar: string;
}
