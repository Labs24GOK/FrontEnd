import styled from 'styled-components';
import '../../../../../styles/_variables.scss';

export const Instruction = styled.h3`
  text-align: center;
  color: #333;
  font-weight: 400;
  font-size: 1.6rem;
`;

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

export const Image = styled.img`
  outline: 10px solid #fff;
  outline-offset: -9px;
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const LabelCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.6;
`;
