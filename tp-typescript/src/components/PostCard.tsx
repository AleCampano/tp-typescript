import type { Post } from '../types';

interface PostCardProps {
  post: Post;
  onSeleccionar: (post: Post) => void;
}

function PostCard({ post, onSeleccionar }: PostCardProps) {
  return (
    <div className="postcard" onClick={() => onSeleccionar(post)}>

      {/* Imagen con rotación de -3 grados */}
      <div className="postcardImagenContenedor">
        <img src={post.imageUrl} alt={post.descripcion} className="postcardImagen" />
      </div>

      <div className="postcardPie">
        <div className="postcardUsuario">
          <img src={post.userAvatar} alt={post.username} className="postcardAvatar" />
          <span className="postcardUsername">{post.username}</span>
        </div>
        <div className="postcardAcciones">
          <button className="postcardBtn" onClick={(e) => e.stopPropagation()}>🤍</button>
          <button className="postcardBtn" onClick={(e) => e.stopPropagation()}>💬</button>
          <button className="postcardBtn" onClick={(e) => e.stopPropagation()}>✈️</button>
        </div>
      </div>

    </div>
  );
}

export default PostCard;
