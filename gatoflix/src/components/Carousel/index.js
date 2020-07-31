import React from 'react';

import { VideoCardGroupContainer, Title, ExtraLink, Description } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({ ignoreFirstVideo, category, }) {

    const categoryTitle = category.titulo;
    const categoryColor = category.cor;
    const categoryDescription = category.descricao;
    const categoryExtraLink = category.link_extra;
    const videos = category.videos;

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

export default Carousel;