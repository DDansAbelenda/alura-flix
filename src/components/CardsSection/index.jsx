import PropTypes from 'prop-types';
import "./cardsSection.css";
import Tag from '../Tag';
import Card from './Card';

const CardsSection = ({ category, videos }) => {
  return (
    <section className="card-section">
      {/* Sección de la categoría */}
      <div className="cards-section-category-container">
        <Tag
          text={category.nombre}
          color={category.color}
          classNameTag="category-tag"
        />
      </div>
      {/* Sección de los videos */}
      <div className="cards-section-cards-container">
        {videos.map((video) => {
          return (
            <Card
              key={video.id}
              video={video}
              color={category.color}
            />
          )
        })}
      </div>
    </section>
  );
};


CardsSection.propTypes = {
  category: PropTypes.object.isRequired,
  videos: PropTypes.array.isRequired
};

export default CardsSection;
