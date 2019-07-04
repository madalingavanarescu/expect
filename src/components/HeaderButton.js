import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

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

class HeaderButton extends React.Component {
  handleSubmit(event) {
    window.location.replace('http://localhost:8000/contact');
    event.preventDefault();
  }

  render() {
    return (
      <Button onClick={this.handleSubmit}>
        <FontAwesome name={'laptop'} /> Book a demo call
      </Button>
    );
  }
}

export default HeaderButton;
