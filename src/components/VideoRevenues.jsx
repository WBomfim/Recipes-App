import React from 'react';
import PropTypes from 'prop-types';
import CardRevenues from './CardRevenues';

function VideoRevenues({ video }) {
  return (
    <div>
      {console.log(video)}
      {/* <iframe src={ video } title="revenue-video" /> */}
      <CardRevenues />
    </div>
  );
}

VideoRevenues.propTypes = {
  video: PropTypes.string.isRequired,
};

export default VideoRevenues;
