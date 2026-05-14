import type { Post } from '../types';
import PostCard from './PostCard';

interface FeedProps {
  posts: Post[];
  cargando: boolean;
  onSeleccionarPost: (post: Post) => void;
}

function Feed({ posts, cargando, onSeleccionarPost }: FeedProps) {

  if (cargando) {
    return <div className="feedCargando"><p>Cargando publicaciones...</p></div>;
  }

  return (
    <section>
      <h2 className="feedTitulo">TENDENCIAS</h2>
      <div className="feedGrid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onSeleccionar={onSeleccionarPost} />
        ))}
      </div>
    </section>
  );
}

export default Feed;
