import type { Story } from '../types';

interface StoriesProps {
  stories: Story[];
}

function Stories({ stories }: StoriesProps) {
  return (
    <section className="stories">
      <h2 className="storiesTitulo">HISTORIAS</h2>
      <div className="storiesLista">
        {stories.map((story) => (
          <div key={story.id} className="storiesItem">
            <div className="storiesAvatarBorde">
              <img src={story.avatar} alt={story.username} className="storiesAvatar" />
            </div>
            <span className="storiesUsername">{story.username}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stories;
