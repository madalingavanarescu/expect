import styled from 'styled-components';
import { Box } from 'rebass';

const Logos = styled(Box)`
  padding-bottom: 0px;

  @media (min-width: 768px) and (max-width: 991.98px) {
    padding-bottom: 0;
  }

  & > div {
    width: 100%;
    max-height: 520px;
    border: solid 6px ${props => props.theme.colors.secondaryLight};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 40px 28px;
    background-color: white;

    @media (min-width: 576px) and (max-width: 767.98px) {
      max-height: auto;
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
      padding: 70px 24px 38px 24px;
      max-height: auto;
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
      width: 540px;
      padding: 97px 26px 38px 26px;
    }
  }

  & > div > div {
    @media (min-width: 768px) and (max-width: 991.98px) {
      padding-right: 16px;
      padding-left: 16px;
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
      padding-right: 22px;
      padding-left: 22px;
      padding-bottom: 55px;
    }
  }

  & > div > div:nth-of-type(odd) {
    padding-right: 16px;

    @media (min-width: 992px) and (max-width: 1199.98px) {
      padding-right: 22px;
    }
  }

  & > div > div:nth-of-type(even) {
    padding-right: 16px;

    @media (min-width: 992px) and (max-width: 1199.98px) {
      padding-right: 22px;
    }
  }

  & > div > div:last-child {
    padding-bottom: 0;
    padding-right: 0;

    @media (min-width: 768px) and (max-width: 991.98px) {
      padding-bottom: 32px;
      padding-right: 16px;
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
      padding-bottom: 55px;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    filter: grayscale(100%);
    opacity: 0.4;
    transition: all 0.3s;

    &:hover {
      filter: grayscale(0);
      opacity: 1;
    }

    @media (max-width: 575.98px) {
      max-width: 80%;
    }
  }
`;

export default Logos;
