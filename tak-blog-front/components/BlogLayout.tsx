import React from "react";
import { Children } from "@/types/common";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  //height: 1000px;
`;

const Inner = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  min-height: 100%;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

function BlogLayout({ children }: Children): React.ReactElement {
  return (
    <Container>
      <Inner>
        <Header />
        {children}
      </Inner>
    </Container>
  );
}

export default BlogLayout;
