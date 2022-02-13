import { Button, TextField } from '@material-ui/core';

import React from 'react';

function FormularioCadastro() {
  return (
    <form>
      <TextField id="nome" label="nome" variant="outlined" fullWidth />
      <TextField
        id="sobrenome"
        label="sobrenome"
        variant="outlined"
        fullWidth
      />
      <TextField id="cpf" label="cpf" variant="outlined" fullWidth />

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
