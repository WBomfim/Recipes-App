import React from 'react';
import PropTypes from 'prop-types';

function VideoRevenues({ video }) {
  const correctEndpoint = video.split('=')[1];

  return (
    <div>
      <iframe src={ `https://www.youtube.com/embed/${correctEndpoint}` } title="revenue-video" data-testid="video" />
    </div>
  );
}

VideoRevenues.propTypes = {
  video: PropTypes.string.isRequired,
};

export default VideoRevenues;
