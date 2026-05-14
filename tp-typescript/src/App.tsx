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
import { comentariosSimulados, usernames, descripciones, fechas } from './data/comentarios';
import './styles.css';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [cargando, setCargando] = useState(true);
  const [postSeleccionado, setPostSeleccionado] = useState<Post | null>(null);
  const [vistaActual, setVistaActual] = useState('home');

  useEffect(() => {
    async function cargarImagenes() {
      try {
        setCargando(true);

        const imagenes = await obtenerImagenes(20);

        const nuevasPosts: Post[] = imagenes.map((imagen, index) => ({
          id: imagen.id,
          imageUrl: imagen.url,
          username: usernames[index % usernames.length],
          userAvatar: `https://cataas.com/cat?width=40&height=40&i=${index}`,
          likes: Math.floor(Math.random() * 9000) + 500,
          descripcion: descripciones[index % descripciones.length],
          comentarios: comentariosSimulados[index % comentariosSimulados.length],
          fecha: fechas[index % fechas.length],
        }));

        const nuevasStories: Story[] = imagenes.slice(0, 8).map((imagen, index) => ({
          id: `story-${imagen.id}`,
          username: usernames[index % usernames.length],
          avatar: imagen.url,
        }));

        setPosts(nuevasPosts);
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
            posts={posts}
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
