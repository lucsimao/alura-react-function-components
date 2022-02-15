import { Button, TextField } from '@material-ui/core';

import React from 'react';

function DadosUsuario({ aoEnviar, validarCpf }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
      }}
    >
      <TextField
        id="email"
        label="E-mail"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      ></TextField>
      <TextField
        id="senha"
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      ></TextField>
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
