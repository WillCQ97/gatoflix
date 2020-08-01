import React from 'react';
import PropTypes from 'prop-types';

import { VideoCardGroupContainer, Title, Description } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({ ignoreFirstVideo, category }) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryDescription = category.descricao;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'var(--primary)' }}>
            {categoryTitle}
          </Title>
          <Description>
            {categoryDescription}
          </Description>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.propTypes = {
  category: {
    titulo: PropTypes.string.isRequired,
    cor: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
  }.isRequired,
  ignoreFirstVideo: PropTypes.bool.isRequired,
};

export default Carousel;
