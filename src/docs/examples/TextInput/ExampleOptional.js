import React from 'react';
import TextInput from 'ps-react/TextInput';

export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
      />
    )
  }
}