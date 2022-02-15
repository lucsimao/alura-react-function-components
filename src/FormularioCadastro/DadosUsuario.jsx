import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';

import ValidacoesCadastro from '../context/ValidacoesCadastro';

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({ senha: { valido: true, texto: '' } });

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(event) {
    const { name, value } = event.target;
    const valido = validacoes[name](value);
    const novoEstado = { ...erros, [name]: valido };
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) return false;
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        name="email"
        id="email"
        label="E-mail"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      ></TextField>
      <TextField
        value={senha}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        onChange={(event) => setSenha(event.target.value)}
        name="senha"
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
