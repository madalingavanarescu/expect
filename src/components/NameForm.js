import React, { Component } from 'react';
import styled from 'styled-components';
const Input = styled.input`
  padding: 16px;
  border: 2px solid rgba(221, 221, 221, 0.5);
  border-radius: 2px;
  font-family: Cabin;
  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  color: #999999;
  appearance: none;
  border: ${props =>
    props.touched && (props.valid ? '1px solid #60e691' : '1px solid #fc5954')};
  margin-bottom: 16px;

  &:focus {
    border: 2px solid rgba(221, 221, 221, 1);
    border: ${props =>
      props.touched &&
      (props.valid ? '1px solid #60e691' : '1px solid #fc5954')};
    outline: none;
  }

  &::placeholder {
    color: #999999;
    font-weight: normal;
  }
`;

const Button = styled.input`
  height: 52px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 3px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: -2px;
  background-color: ${props => props.theme.colors.primary};
  color: #ffffff;
  text-align: center;
  line-height: 1.4;
  font-size: 1.25rem;
  outline: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: ${props => props.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
  }
`;

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    window.location.replace('http://localhost:8000/demo?' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your website..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button type="submit" value="Try it" />
      </form>
    );
  }
}

export default NameForm;
