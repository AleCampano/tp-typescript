import { useState } from 'react';
import type { Post } from '../types';

interface ModalProps {
  post: Post;
  onCerrar: () => void;
}

function Modal({ post, onCerrar }: ModalProps) {
  const [likeActivo, setLikeActivo] = useState(false);
  const [cantidadLikes, setCantidadLikes] = useState(post.likes);

  function toggleLike() {
    if (likeActivo) {
      setCantidadLikes(cantidadLikes - 1);
    } else {
      setCantidadLikes(cantidadLikes + 1);
    }
    setLikeActivo(!likeActivo);
  }

  function handleFondoClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onCerrar();
    }
  }

  return (
    <div className="modalFondo" onClick={handleFondoClick}>
      <div className="modalCaja">

        <div className="modalImagenLado">
          <img src={post.imageUrl} alt={post.descripcion} className="modalImagen" />
        </div>

        <div className="modalInfoLado">

          <div className="modalCabecera">
            <img src={post.userAvatar} alt={post.username} className="modalAvatar" />
            <div>
              <p className="modalUsername">{post.username}</p>
              <p className="modalFecha">{post.fecha}</p>
            </div>
            <button className="modalCerrar" onClick={onCerrar}>✕</button>
          </div>

          <div className="modalDescripcion">
            <strong>{post.username}</strong> {post.descripcion}
          </div>

          <div className="modalComentarios">
            {post.comentarios.map((comentario, index) => (
              <div key={index} className="modalComentario">
                <strong>{comentario.usuario}</strong> {comentario.texto}
              </div>
            ))}
          </div>

          <div className="modalAcciones">
            <button className="modalBtn" onClick={toggleLike}>
              {likeActivo ? '❤️' : '🤍'}
            </button>
            <button className="modalBtn">💬</button>
            <button className="modalBtn">✈️</button>
          </div>

          <p className="modalLikes">{cantidadLikes.toLocaleString()} me gusta</p>

          <div className="modalComentar">
            <input type="text" placeholder="Agregá un comentario..." className="modalInput" />
            <button className="modalPublicar">Publicar</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Modal;
