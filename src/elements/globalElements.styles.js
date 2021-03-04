import styled from 'styled-components';

export const HeadingTitle = styled.h1`
  padding-left: 8px;
  font-weight: 800;
`;

export const Container = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 24px auto 0;
`;
