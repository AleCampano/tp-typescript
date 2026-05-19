import axios from 'axios';
import type { CatImage } from '../types';

// URL base de The Cat API
const URL = 'https://api.thecatapi.com/v1/images/search';

// Pide imágenes de gatos a la API y las devuelve
  export async function obtenerImagenes(cantidad: number): Promise<CatImage[]> {
    const respuesta = await axios.get<CatImage[]>(URL, {
      params: { limit: cantidad },
    });
    return respuesta.data;
  }
