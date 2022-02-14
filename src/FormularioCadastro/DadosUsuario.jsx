import { Button, TextField } from '@material-ui/core';

import React from 'react';

function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
      ></TextField>
      <TextField
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      ></TextField>
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
