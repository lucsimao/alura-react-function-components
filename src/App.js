import './App.css';

import React, { Component } from 'react';

import { Container } from '@material-ui/core';
import FormularioCadastro from './FormularioCadastro/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
