import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${(props) => props.primary && props.theme.primaryColor};
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  padding: 16px;
  color: #fff;

  &:hover {
    background: ${(props) => props.primary && props.theme.hoverColor};
  }
`;
