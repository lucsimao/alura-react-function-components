import 'fontsource-roboto';
import './App.css';

import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';

import FormularioCadastro from './FormularioCadastro/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf} />
      </Container>
    );
  }
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return {
      valido: false,
      texto: 'Cpf deve ter 11 dígitos',
    };
  }
  return { valido: true, texto: '' };
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
