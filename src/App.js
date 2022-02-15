import 'fontsource-roboto';
import './App.css';

import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { validarCpf, validarNome, validarSenha } from './models/cadastro';

import FormularioCadastro from './FormularioCadastro/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro
          aoEnviar={aoEnviarForm}
          validacoes={{
            cpf: validarCpf,
            senha: validarSenha,
            nome: validarNome,
          }}
        />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
