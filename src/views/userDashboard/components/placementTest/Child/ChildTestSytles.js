import styled from 'styled-components';
import '../../../../../styles/_variables.scss';

export const Question = styled.h3`
  font-size: 1.8rem;
  line-height: 1.6;
  text-align: center;
  font-weight: 500;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;
