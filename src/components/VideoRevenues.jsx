import React, { useContext } from 'react';
import RevenuesContext from '../context/RevenuesContext';
import '../styles/ShowDetailsProcess.css';

function VideoRevenues() {
  const { exibitionDetails } = useContext(RevenuesContext);
  const [revenueDetails] = exibitionDetails;
  const correctEndpoint = revenueDetails.strYoutube.split('=')[1];

  return (
    <div>
      <iframe src={ `https://www.youtube.com/embed/${correctEndpoint}` } title="revenue-video" data-testid="video" />
    </div>
  );
}

export default VideoRevenues;
