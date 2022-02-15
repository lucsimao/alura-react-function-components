import 'fontsource-roboto';
import './App.css';

import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { validarCpf, validarNome, validarSenha } from './models/cadastro';

import FormularioCadastro from './FormularioCadastro/FormularioCadastro';
import ValidacoesCadastro from './context/ValidacoesCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validarCpf,
            senha: validarSenha,
            nome: validarNome,
          }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
