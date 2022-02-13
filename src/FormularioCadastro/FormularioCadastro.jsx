import { Button, TextField } from '@material-ui/core';

import React from 'react';

function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        label="nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="sobrenome"
        label="sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="cpf"
        label="cpf"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <label>Promoções</label>
      <input type="checkbox" />
      <label>Novidades</label>
      <input type="checkbox" />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
