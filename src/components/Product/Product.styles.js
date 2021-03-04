import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const List = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: calc(50% - 32px);
  padding: 16px;
  background: white;
  margin: 8px;
  justify-content: center;

  @media (min-width: 768px) {
    flex-basis: calc(25% - 32px);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 130px;
  margin: 0 auto 16px;
  display: block;
`;

export const Text = styled.p`
  font-size: 1.1em;
  margin-bottom: 8px;
`;

export const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: auto;
  padding-top: 20px;
`;
