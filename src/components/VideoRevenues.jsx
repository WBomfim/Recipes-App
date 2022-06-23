import React from 'react';
import PropTypes from 'prop-types';
import CardRevenues from './CardRevenues';

function VideoRevenues({ video }) {
  const correctEndpoint = video.split('=')[1];

  return (
    <div>
      <iframe src={ `https://www.youtube.com/embed/${correctEndpoint}` } title="revenue-video" data-testid="video" />
      <CardRevenues />
    </div>
  );
}

VideoRevenues.propTypes = {
  video: PropTypes.string.isRequired,
};

export default VideoRevenues;
