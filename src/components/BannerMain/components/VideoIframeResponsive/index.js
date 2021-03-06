import React from 'react';
import PropTypes from 'prop-types';

import { VideoContainer, ResponsiveIframe } from './styles';

function YouTubeIframeResponsive({ iframeTitle, youtubeID }) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title={iframeTitle}
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

YouTubeIframeResponsive.propTypes = {
  iframeTitle: PropTypes.string.isRequired,
  youtubeID: PropTypes.string.isRequired,
};

export default YouTubeIframeResponsive;
