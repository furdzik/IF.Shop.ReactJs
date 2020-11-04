import styled from 'styled-components';

const DetailsWrapper = styled.div`
  display: flex;
`;

const Description = styled.div`
  white-space: pre-line;
  margin-bottom: 2rem;
`;

const AddToBasketBox = styled.div`
  display: flex;
  margin-bottom: 3rem;
  padding: 1.5rem 2rem;
  border-radius: .4rem;
  background: ${(props) => props.theme.colors.gray};
`;

const Price = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: auto;
`;

const Colors = styled.div`
    display: flex;
`;

const Color = styled.div`

`;

export {
  DetailsWrapper,
  Description,
  AddToBasketBox,
  Price,
  Colors,
  Color
};
