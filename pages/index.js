import React from "react";

import styled from "styled-components";

// Layout
import LayoutPrimary from "../layouts/layout-primary";
import breakpoint from "../utils/breakpoints";

const StyledHome = styled.main`
  section {
    padding: 96px 0 24px 0;

    ${breakpoint.medium`
      padding: 160px 0;
    `}
  }
`;

const Home = () => {
  return (
    <StyledHome>
      {/* <h1 className="text-center">Esta es la home page</h1> */}
    </StyledHome>
  );
};

export default Home;

Home.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>;
