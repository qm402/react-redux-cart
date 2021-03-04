import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

export const Logo = styled.img`
  margin-top: 10px;
  max-width: 80px;
`;

export const TrolleyWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 32px;
  padding: 8px 16px;
  font-size: 1.1em;
  text-align: center;
`;

export const ItemCount = styled.span`
  position: absolute;
  top: 0;
  z-index: 100;
  background: ${(props) => props.theme.colorDark};
  border: 1px solid ${(props) => props.theme.colorDark};
  border-radius: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colorWhite};
  margin-left: 40px;
  font-size: 0.7em;
`;
