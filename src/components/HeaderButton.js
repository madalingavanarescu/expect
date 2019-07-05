import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const Button = styled.button`
  height: 50px;
  border: none;
  font-family: Cabin;
  border-radius: 3px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 15px;
  margin-top: -10px;
  background-color: #ffffff;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  line-height: 1.4;
  font-size: 1.25rem;
  outline: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: #fbeaf6;
  }

  &:disabled {
    opacity: 0.6;
  }
`;

const HeaderButton = ({ onClick, selected, children }) => (
  <Button onClick={onClick}>
    <FontAwesome name={'laptop'} /> Book a demo call
  </Button>
);

HeaderButton.propTypes = {
  onClick: PropTypes.func,
};

export default HeaderButton;
