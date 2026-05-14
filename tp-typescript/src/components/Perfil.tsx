import type { UserProfile, Post } from '../types';

interface PerfilProps {
  usuario: UserProfile;
  posts: Post[];
  onSeleccionarPost: (post: Post) => void;
}

function Perfil({ usuario, posts, onSeleccionarPost }: PerfilProps) {
  return (
    <div className="perfil">

      <div className="perfilCabecera">
        <div className="perfilAvatarBorde">
          <img src={usuario.fotoPerfil} alt={usuario.nombreCompleto} className="perfilAvatar" />
        </div>

        <div className="perfilDatos">
          <div className="perfilFilaNombre">
            <h2 className="perfilUsername">{usuario.username}</h2>
            <button className="perfilBtnEditar">Editar perfil</button>
          </div>

          <div className="perfilStats">
            <span><strong>{usuario.cantidadPublicaciones}</strong> publicaciones</span>
            <span><strong>{usuario.seguidores.toLocaleString()}</strong> seguidores</span>
            <span><strong>{usuario.seguidos.toLocaleString()}</strong> seguidos</span>
          </div>

          <p className="perfilNombreCompleto">{usuario.nombreCompleto}</p>
          <p className="perfilBio">{usuario.bio}</p>
        </div>
      </div>

      <div className="perfilLinea"></div>

      <div className="perfilGrid">
        {posts.map((post) => (
          <div key={post.id} className="perfilPost" onClick={() => onSeleccionarPost(post)}>
            <img src={post.imageUrl} alt={post.descripcion} className="perfilPostImagen" />
            <div className="perfilPostOverlay">❤️ {post.likes.toLocaleString()}</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Perfil;
