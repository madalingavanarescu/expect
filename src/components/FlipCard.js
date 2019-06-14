import styled from 'styled-components';
import { Card as CardRebass } from 'rebass';

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;

  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.minWidth}, 1fr)
  );
  justify-items: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const Card = styled(CardRebass).attrs({
  bg: 'white',
  boxShadow: 0,
  borderRadius: 8,
})`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;

  width: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    transform: rotateY(180deg);

    #back {
      display: block;
    }

    #front {
      display: none;
    }
  }

  /* Position the front and back side */
  #front,
  #back {
    backface-visibility: hidden;
  }

  /* Style the front side (fallback if image is missing) */
  #front {
  }

  /* Style the back side */
  #back {
    display: none;
    transform: rotateY(180deg);
  }
`;

export default Card;
