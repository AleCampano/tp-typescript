import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Stories from './components/Stories';
import Feed from './components/Feed';
import Modal from './components/Modal';
import Perfil from './components/Perfil';
import { obtenerImagenes } from './api/api';
import type { Post, Story } from './types';
import { usuarioLogueado } from './data/usuario';
import { datosPosts, datosPostsPropios } from './data/comentarios';
import './App.css';
import './styles.css';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postsPropios, setPostsPropios] = useState<Post[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [cargando, setCargando] = useState(true);
  const [postSeleccionado, setPostSeleccionado] = useState<Post | null>(null);
  const [vistaActual, setVistaActual] = useState('home');

  useEffect(() => {
    async function cargarImagenes() {
      try {
        setCargando(true);

        const [imagenes, imagenesPerfilRaw] = await Promise.all([
          obtenerImagenes(20),
          obtenerImagenes(6),
        ]);

        const nuevasPosts: Post[] = imagenes.map((imagen, index) => ({
          id: imagen.id,
          imageUrl: imagen.url,
          username: datosPosts[index].username,
          userAvatar: `https://cataas.com/cat?width=40&height=40&i=${index}`,
          likes: datosPosts[index].likes,
          descripcion: datosPosts[index].descripcion,
          comentarios: datosPosts[index].comentarios,
          fecha: datosPosts[index].fecha,
        }));

        const nuevosPostsPropios: Post[] = imagenesPerfilRaw.map((imagen, index) => ({
          id: `propio-${imagen.id}`,
          imageUrl: imagen.url,
          username: usuarioLogueado.username,
          userAvatar: usuarioLogueado.fotoPerfil,
          likes: datosPostsPropios[index].likes,
          descripcion: datosPostsPropios[index].descripcion,
          comentarios: datosPostsPropios[index].comentarios,
          fecha: datosPostsPropios[index].fecha,
        }));

        const nuevasStories: Story[] = imagenes.slice(0, 8).map((imagen, index) => ({
          id: `story-${imagen.id}`,
          username: datosPosts[index].username,
          avatar: `https://cataas.com/cat?width=80&height=80&i=${index}`,
        }));

        setPosts(nuevasPosts);
        setPostsPropios(nuevosPostsPropios);
        setStories(nuevasStories);
      } catch (error) {
        console.error('Error al cargar imágenes:', error);
      } finally {
        setCargando(false);
      }
    }

    cargarImagenes();
  }, []);

  return (
    <div className="app">
      <Header />

      <Sidebar
        usuario={usuarioLogueado}
        vistaActual={vistaActual}
        onCambiarVista={setVistaActual}
      />

      <main className="app__contenido">
        {vistaActual === 'home' ? (
          <>
            <Stories stories={stories} />
            <Feed
              posts={posts}
              cargando={cargando}
              onSeleccionarPost={setPostSeleccionado}
            />
          </>
        ) : (
          <Perfil
            usuario={usuarioLogueado}
            posts={postsPropios}
            onSeleccionarPost={setPostSeleccionado}
          />
        )}
      </main>

      {postSeleccionado !== null && (
        <Modal
          post={postSeleccionado}
          onCerrar={() => setPostSeleccionado(null)}
        />
      )}
    </div>
  );
}

export default App;
