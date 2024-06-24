import React from "react";

// Styled
import styled from "styled-components";

const StyledVideo = styled.section`
  text-align: center;
  background-color: black;
  height: 100vh;

  iframe {
    border-radius: 18px;
  }
`;

const Video = (videoCode) => {
  return (
    <StyledVideo>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoCode}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </StyledVideo>
  );
};

export default Video;
