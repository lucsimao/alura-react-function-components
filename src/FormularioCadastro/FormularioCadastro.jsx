import { Button, TextField } from '@material-ui/core';

import React from 'react';

function FormularioCadastro() {
  return (
    <form>
      <TextField id="nome" label="nome" variant="outlined" />
      <TextField id="sobrenome" label="sobrenome" variant="outlined" />
      <TextField id="cpf" label="cpf" variant="outlined" />

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
