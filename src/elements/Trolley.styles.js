import styled from 'styled-components';

export const Title = styled.h1`
  padding-left: 8px;
  font-weight: 800;
`;

export const TrolleyWrapper = styled.div`
  height: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const TrolleyChildWrapper = styled.div`
  width: 100%;

  @media (min-width: 490px) {
    width: calc(50% - 8px);
    margin-left: ${(props) => props.marginLeft && '16px'};
  }
`;

export const TrolleyItem = styled.li`
  list-style: none;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  padding: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TrolleyItemImage = styled.img`
  list-style: none;
  width: 100%;
  max-width: 130px;
  display: block;
`;

export const TrolleyItemText = styled.div`
  margin-left: 12px;
  p {
    margin-top: 8px;
  }
`;

export const TrolleyControls = styled.div`
  margin-top: 12px;
`;
export const TrolleyQuantity = styled.select`
  padding: 13px;
  margin-right: 14px;
  font-size: 1.1em;
`;

export const CheckoutPanel = styled.div`
  background: ${(props) => props.theme.colorWhite};
  padding: 16px;
  margin-top: 16px;
`;

export const SummaryItem = styled.dl`
  display: flex;
  justify-content: space-between;
  margin: 8px 0px;
`;

export const EmptyTrollerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  h1 {
    margin-bottom: 20px;
  }
`;
